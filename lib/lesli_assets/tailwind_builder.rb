# frozen_string_literal: true

require "fileutils"
require "find"
require "open3"
require "pathname"
require_relative "tailwind_reporter"

module LesliAssets
    # Discovers Tailwind entrypoints across the Rails application and its packages,
    # then compiles each source into the package's Rails asset directory.
    class TailwindBuilder
        # Keeps the source and its calculated output metadata together throughout
        # build and watch operations.
        EntryPoint = Struct.new(:source, :destination, :relative_source, keyword_init: true)

        # These folders either contain dependencies, temporary files, or generated
        # content and must not be searched for Tailwind sources.
        EXCLUDED_DIRECTORIES = %w[.git node_modules tmp vendor].freeze

        # Compiler and reporter injection makes the builder reusable from the CLI
        # and independently testable without executing the real Tailwind binary.
        def initialize(root:, compiler: nil, minify: false, output: $stdout, errors: $stderr, reporter: nil)
            @root = Pathname(root).expand_path.cleanpath
            @compiler = compiler
            @minify = minify
            @output = output
            @errors = errors
            @reporter = reporter || TailwindReporter.new(output: output, errors: errors)
        end

        def build
            entries = entrypoints
            return report_empty if entries.empty?

            # Stop after the first failure so Make receives a failure immediately.
            entries.all? { |entry| compile(entry) }
        end

        def watch
            entries = entrypoints
            return report_empty if entries.empty?

            # Every Tailwind entrypoint needs its own long-running watcher. Starting
            # them all before monitoring prevents the first watcher from blocking the rest.
            processes = {}
            entries.each { |entry| processes[spawn_watcher(entry)] = entry }
            monitor(processes)
        rescue StandardError, LoadError => error
            @reporter.danger("Unable to start watchers", error: error.message)
            processes&.each_key { |pid| terminate(pid, "TERM") }
            reap(processes) unless processes.nil? || processes.empty?
            false
        end

        def entrypoints
            sources.map { |source| entrypoint_for(source) }
        end

        private

        def sources
            files = []

            # Find.find allows entire directory trees to be pruned before traversal,
            # avoiding dependency folders and previously generated Rails assets.
            Find.find(@root.to_s) do |path|
                pathname = Pathname(path)

                if pathname.directory? && excluded_directory?(pathname)
                    Find.prune
                elsif pathname.file? && tailwind_entrypoint?(pathname)
                    files << pathname
                end
            end

            files.sort
        end

        def excluded_directory?(path)
            EXCLUDED_DIRECTORIES.include?(path.basename.to_s) || path.to_s.end_with?("/app/assets")
        end

        def tailwind_entrypoint?(path)
            path.basename.to_s.end_with?(".tailwind.css") && path.to_s.include?("/source/tailwind/")
        end

        def entrypoint_for(source)
            # Everything before /source/tailwind is treated as the application,
            # engine, or gem root. Everything after it is preserved in the output.
            package_root, relative_source = source.to_s.split("/source/tailwind/", 2)
            package_root = Pathname(package_root)
            destination_root = package_root.join("app/assets/stylesheets")

            # The main application writes directly to stylesheets. Engines and gems
            # use a snake_case namespace to prevent asset name collisions.
            unless package_root == @root
                destination_root = destination_root.join(package_slug(package_root.basename.to_s))
            end

            EntryPoint.new(
                source: source,
                destination: destination_root.join(relative_source),
                relative_source: relative_source
            )
        end

        def package_slug(name)
            name.gsub(/([a-z\d])([A-Z])/, "\\1_\\2").downcase
        end

        def compiler
            return @compiler unless @compiler.nil? || @compiler.empty?

            # Resolve the native executable directly instead of invoking the gem's
            # wrapper, which prints its internal command before running Tailwind.
            require "tailwindcss/ruby"
            @compiler = Tailwindcss::Ruby.executable
        rescue LoadError => error
            raise LoadError, "tailwindcss-ruby is unavailable: #{error.message}"
        end

        def arguments(entry, watch: false)
            arguments = ["-i", entry.source.to_s, "-o", entry.destination.to_s]
            arguments << "--minify" if @minify
            arguments << "--watch" if watch
            arguments << "--silent"
            arguments
        end

        def environment
            # Tailwind needs this path to resolve imports such as `tailwindcss/theme.css`.
            # Preserve a NODE_PATH explicitly supplied by the caller.
            node_modules = Pathname(__dir__).join("../../node_modules").expand_path
            return {} unless node_modules.directory? && ENV["NODE_PATH"].to_s.empty?

            { "NODE_PATH" => node_modules.to_s }
        end

        def compile(entry)
            FileUtils.mkdir_p(entry.destination.dirname)

            # Capture both streams so successful builds stay quiet while compiler
            # diagnostics remain available when the command fails.
            stdout, stderr, status = Open3.capture3(environment, compiler, *arguments(entry))

            if status.success?
                @reporter.success(
                    "Compiled #{display_path(entry)}",
                    size: human_size(entry.destination.size)
                )
                true
            else
                report_failure(entry, status, stdout, stderr)
                false
            end
        rescue StandardError, LoadError => error
            @reporter.danger("Unable to compile #{display_path(entry)}")
            @reporter.error_detail(error.message)
            false
        end

        def report_failure(entry, status, stdout, stderr)
            @reporter.danger(
                "Compilation failed for #{display_path(entry)}",
                exit: status.exitstatus
            )
            [stdout, stderr].reject(&:empty?).each do |stream|
                stream.each_line do |line|
                    detail = line.rstrip
                    @reporter.error_detail(detail) unless detail.empty?
                end
            end
        end

        def spawn_watcher(entry)
            FileUtils.mkdir_p(entry.destination.dirname)
            @reporter.info(
                "Watching #{display_path(entry)}",
                output: relative_path(entry.destination)
            )
            Process.spawn(environment, compiler, *arguments(entry, watch: true), out: $stdout, err: $stderr)
        end

        def monitor(processes)
            interrupted = false

            # Forward shutdown signals to every child watcher and restore the
            # caller's original handlers before returning control.
            previous_handlers = %w[INT TERM].to_h do |signal|
                [signal, Signal.trap(signal) do
                    interrupted = true
                    processes.each_key { |pid| terminate(pid, signal) }
                end]
            end

            until processes.empty?
                pid, status = Process.wait2
                entry = processes.delete(pid)
                next if interrupted || status.success?

                # A dead watcher would leave the generated CSS partially stale, so
                # terminate the remaining group and return a failing exit status.
                @reporter.danger(
                    "Watcher stopped for #{display_path(entry)}",
                    exit: status.exitstatus
                )
                processes.each_key { |watcher_pid| terminate(watcher_pid, "TERM") }
                reap(processes)
                return false
            end

            !interrupted
        ensure
            previous_handlers&.each { |signal, handler| Signal.trap(signal, handler) }
        end

        def terminate(pid, signal)
            Process.kill(signal, pid)
        rescue Errno::ESRCH
            nil
        end

        def reap(processes)
            # Wait for terminated children so the CLI does not leave zombie processes.
            processes.each_key do |pid|
                Process.wait(pid)
            rescue Errno::ECHILD
                nil
            end
            processes.clear
        end

        def report_empty
            @reporter.warning("No *.tailwind.css entrypoints found", root: @root.to_s)
            true
        end

        def relative_path(path)
            path.relative_path_from(@root).to_s
        rescue ArgumentError
            path.to_s
        end

        def display_path(entry)
            # Show the source in its package context without exposing the internal
            # source/tailwind directory used only by the build system.
            package_path = entry.source.to_s.split("/source/tailwind/", 2).first
            package_path = Pathname(package_path).relative_path_from(@root)
            @root.basename.join(package_path, entry.relative_source).cleanpath.to_s
        rescue ArgumentError
            entry.source.to_s
        end

        def human_size(bytes)
            return "#{bytes} B" if bytes < 1_024
            return format("%.1f KB", bytes / 1_024.0) if bytes < 1_048_576

            format("%.1f MB", bytes / 1_048_576.0)
        end
    end
end
