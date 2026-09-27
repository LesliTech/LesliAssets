# frozen_string_literal: true

require "test_helper"
require "fileutils"
require "pathname"
require "tmpdir"
require "lesli_assets/tailwind_builder"

class TailwindBuilderTest < Minitest::Test
    class RecordingReporter
        attr_reader :events

        def initialize
            @events = []
        end

        %i[info success warning danger].each do |level|
            define_method(level) do |message, **data|
                @events << { level: level, message: message, data: data }
            end
        end

        def error_detail(message)
            @events << { level: :error_detail, message: message, data: {} }
        end
    end

    class RecordingWatchBuilder < LesliAssets::TailwindBuilder
        attr_reader :spawned, :monitored

        def initialize(...)
            super
            @spawned = []
        end

        private

        def spawn_watcher(entry)
            @spawned << entry.relative_source
            1_000 + @spawned.length
        end

        def monitor(processes)
            @monitored = processes
            true
        end
    end

    def setup
        @root = Pathname(Dir.mktmpdir("lesli-assets-tailwind-builder"))
        @reporter = RecordingReporter.new
    end

    def teardown
        FileUtils.remove_entry(@root) if @root.exist?
    end

    def test_discovers_entrypoints_and_maps_destinations
        write("source/tailwind/application.tailwind.css")
        write("engines/LesliAdmin/source/tailwind/components/admin.tailwind.css")
        write("gems/LesliDate/source/tailwind/date.tailwind.css")

        write("node_modules/package/source/tailwind/ignored.tailwind.css")
        write("vendor/package/source/tailwind/ignored.tailwind.css")
        write("tmp/package/source/tailwind/ignored.tailwind.css")
        write(".git/package/source/tailwind/ignored.tailwind.css")
        write("example/app/assets/source/tailwind/generated.tailwind.css")
        write("source/stylesheets/not-an-entrypoint.css")

        entries = builder.entrypoints
        paths = entries.to_h do |entry|
            [ relative(entry.source), relative(entry.destination) ]
        end

        assert_equal(
            {
                "engines/LesliAdmin/source/tailwind/components/admin.tailwind.css" =>
                    "engines/LesliAdmin/app/assets/stylesheets/lesli_admin/components/admin.tailwind.css",
                "gems/LesliDate/source/tailwind/date.tailwind.css" =>
                    "gems/LesliDate/app/assets/stylesheets/lesli_date/date.tailwind.css",
                "source/tailwind/application.tailwind.css" =>
                    "app/assets/stylesheets/application.tailwind.css"
            },
            paths
        )
        assert_equal(paths.keys.sort, paths.keys)
    end

    def test_build_invokes_compiler_and_creates_output
        source = write("source/tailwind/application.tailwind.css", "@import 'tailwindcss';")
        compiler, log = fake_compiler

        assert builder(compiler: compiler, minify: true).build

        destination = @root.join("app/assets/stylesheets/application.tailwind.css")
        arguments = destination.readlines(chomp: true)

        assert destination.file?
        assert_includes(arguments, "-i")
        assert_includes(arguments, source.to_s)
        assert_includes(arguments, "-o")
        assert_includes(arguments, destination.to_s)
        assert_includes(arguments, "--minify")
        assert_includes(arguments, "--silent")
        assert_equal(1, log.readlines.size)

        event = event_for(:success)
        assert_match(/Compiled/, event.fetch(:message))
        assert_match(/application\.tailwind\.css/, event.fetch(:message))
        assert(event.fetch(:data).key?(:size))
    end

    def test_build_stops_after_first_compiler_failure_and_reports_diagnostics
        write("source/tailwind/first.tailwind.css")
        write("source/tailwind/second.tailwind.css")
        compiler, log = fake_compiler(
            exit_status: 7,
            stdout: "compiler stdout\n",
            stderr: "compiler stderr\n",
            create_output: false
        )

        refute builder(compiler: compiler).build

        assert_equal(1, log.readlines.size)
        assert_equal(
            {
                level: :danger,
                message: "Compilation failed for #{@root.basename}/first.tailwind.css",
                data: { exit: 7 }
            },
            event_for(:danger)
        )
        assert_equal(
            [ "compiler stdout", "compiler stderr" ],
            @reporter.events
                .select { |event| event.fetch(:level) == :error_detail }
                .map { |event| event.fetch(:message) }
        )
    end

    def test_build_reports_an_unavailable_compiler
        write("source/tailwind/application.tailwind.css")

        refute builder(compiler: @root.join("missing-tailwind").to_s).build

        assert_match(/Unable to compile/, event_for(:danger).fetch(:message))
        assert_match(/No such file or directory/, event_for(:error_detail).fetch(:message))
    end

    def test_build_with_no_entrypoints_is_successful_and_warns
        assert builder.build

        assert_equal(
            {
                level: :warning,
                message: "No *.tailwind.css entrypoints found",
                data: { root: @root.to_s }
            },
            event_for(:warning)
        )
    end

    def test_watch_starts_every_entrypoint_before_monitoring
        write("source/tailwind/application.tailwind.css")
        write("gems/LesliDate/source/tailwind/date.tailwind.css")
        tailwind_builder = RecordingWatchBuilder.new(
            root: @root,
            compiler: "/fake/tailwind",
            reporter: @reporter
        )

        assert tailwind_builder.watch
        assert_equal([ "date.tailwind.css", "application.tailwind.css" ], tailwind_builder.spawned)
        assert_equal([ 1_001, 1_002 ], tailwind_builder.monitored.keys)
        assert_equal(
            tailwind_builder.spawned,
            tailwind_builder.monitored.values.map(&:relative_source)
        )
    end

    private

    def builder(compiler: nil, minify: false)
        LesliAssets::TailwindBuilder.new(
            root: @root,
            compiler: compiler,
            minify: minify,
            reporter: @reporter
        )
    end

    def write(relative_path, contents = "")
        path = @root.join(relative_path)
        path.dirname.mkpath
        path.write(contents)
        path
    end

    def relative(path)
        Pathname(path).relative_path_from(@root).to_s
    end

    def event_for(level)
        @reporter.events.find { |event| event.fetch(:level) == level }
    end

    def fake_compiler(exit_status: 0, stdout: "", stderr: "", create_output: true)
        path = @root.join("fake-tailwind")
        log = @root.join("fake-tailwind.log")
        path.write(<<~RUBY)
            #!/usr/bin/env ruby
            File.open(#{log.to_s.inspect}, "a") { |file| file.puts(ARGV.join("\\t")) }
            $stdout.write(#{stdout.inspect})
            $stderr.write(#{stderr.inspect})

            if #{create_output}
                output = ARGV.fetch(ARGV.index("-o") + 1)
                File.write(output, ARGV.join("\\n"))
            end

            exit(#{exit_status})
        RUBY
        path.chmod(0o755)

        [ path.to_s, log ]
    end
end
