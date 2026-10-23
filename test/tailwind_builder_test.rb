# frozen_string_literal: true

require "test_helper"
require "fileutils"
require "pathname"
require "tmpdir"
require "lesli_assets/tailwind_builder"

class TailwindBuilderTest < Minitest::Test
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
    end

    def teardown
        FileUtils.remove_entry(@root) if @root.exist?
    end

    def test_discovers_entrypoints_and_maps_destinations
        write("source/tailwind/application.css")
        write("engines/LesliAdmin/source/tailwind/admin.css")
        write("gems/LesliDate/source/tailwind/date.css")
        write("source/tailwind/settings/theme.css")
        write("engines/LesliAdmin/source/tailwind/components/card.css")

        write("node_modules/package/source/tailwind/ignored.css")
        write("vendor/package/source/tailwind/ignored.css")
        write("tmp/package/source/tailwind/ignored.css")
        write(".git/package/source/tailwind/ignored.css")
        write("example/app/assets/source/tailwind/generated.css")
        write("source/stylesheets/not-an-entrypoint.css")

        entries = builder.entrypoints
        paths = entries.to_h do |entry|
            [ relative(entry.source), relative(entry.destination) ]
        end

        assert_equal(
            {
                "engines/LesliAdmin/source/tailwind/admin.css" =>
                    "engines/LesliAdmin/app/assets/stylesheets/lesli_admin/admin.css",
                "gems/LesliDate/source/tailwind/date.css" =>
                    "gems/LesliDate/app/assets/stylesheets/lesli_date/date.css",
                "source/tailwind/application.css" =>
                    "app/assets/stylesheets/application.css"
            },
            paths
        )
        assert_equal(paths.keys.sort, paths.keys)
    end

    def test_build_invokes_compiler_and_creates_output
        source = write("source/tailwind/application.css", "@import 'tailwindcss';")
        compiler, log = fake_compiler

        output = capture_termline do
            assert builder(compiler: compiler, minify: true).build
        end

        destination = @root.join("app/assets/stylesheets/application.css")
        arguments = destination.readlines(chomp: true)

        assert destination.file?
        assert_includes(arguments, "-i")
        assert_includes(arguments, source.to_s)
        assert_includes(arguments, "-o")
        assert_includes(arguments, destination.to_s)
        assert_includes(arguments, "--minify")
        assert_includes(arguments, "--silent")
        assert_equal(1, log.readlines.size)

        assert_includes(output, "TAILWIND: Compiled")
        assert_includes(output, "application.css")
        assert_includes(output, "size=")
    end

    def test_build_stops_after_first_compiler_failure_and_reports_diagnostics
        write("source/tailwind/first.css")
        write("source/tailwind/second.css")
        compiler, log = fake_compiler(
            exit_status: 7,
            stdout: "compiler stdout\n",
            stderr: "compiler stderr\n",
            create_output: false
        )

        output = capture_termline do
            refute builder(compiler: compiler).build
        end

        assert_equal(1, log.readlines.size)
        assert_includes(output, "Compilation failed for #{@root.basename}/first.css")
        assert_match(/exit\D+7/, output)
        assert_includes(output, "compiler stdout")
        assert_includes(output, "compiler stderr")
    end

    def test_build_reports_an_unavailable_compiler
        write("source/tailwind/application.css")

        output = capture_termline do
            refute builder(compiler: @root.join("missing-tailwind").to_s).build
        end

        assert_includes(output, "Unable to compile")
        assert_includes(output, "No such file or directory")
    end

    def test_build_with_no_entrypoints_is_successful_and_warns
        output = capture_termline { assert builder.build }

        assert_includes(output, "No Tailwind entrypoints found")
        assert_includes(output, "root")
        assert_includes(output, @root.to_s)
    end

    def test_watch_starts_every_entrypoint_before_monitoring
        write("source/tailwind/application.css")
        write("gems/LesliDate/source/tailwind/date.css")
        tailwind_builder = RecordingWatchBuilder.new(
            root: @root,
            compiler: "/fake/tailwind"
        )

        assert tailwind_builder.watch
        assert_equal([ "date.css", "application.css" ], tailwind_builder.spawned)
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
            minify: minify
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

    def capture_termline(&block)
        output, = capture_io(&block)
        output.gsub(/\e\[[0-9;]*m/, "")
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
