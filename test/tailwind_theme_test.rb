# frozen_string_literal: true

require "test_helper"
require "open3"
require "pathname"
require "tmpdir"
require "tailwindcss/ruby"

class TailwindThemeTest < Minitest::Test
    SOURCE = Pathname(File.expand_path("../source/tailwind", __dir__))

    def test_both_shared_stylesheets_supply_the_complete_theme
        Dir.mktmpdir("lesli-theme") do |directory|
            %w[application public].each do |name|
                css = compile(SOURCE.join("#{name}.css"), File.join(directory, "#{name}.css"))

                # These tokens and animations must exist even when only another
                # package uses them; scanning the shell alone is insufficient.
                assert_match(/--color-rose-950\s*:/, css)
                assert_match(/--spacing\s*:/, css)
                assert_match(/--radius-xl\s*:/, css)
                assert_match(/--lesli-color-primary\s*:/, css)
                assert_match(/--color-primary\s*:/, css)
                assert_includes css, "@keyframes spin"
            end
        end
    end

    def test_a_separate_stylesheet_compiles_utilities_without_repeating_the_theme
        Dir.mktmpdir("lesli-theme-consumer") do |directory|
            source = File.join(directory, "component.css")
            File.write(source, <<~CSS)
                @reference "tailwindcss/theme.css";
                @reference "#{SOURCE.join('settings/theme.css')}";
                @import "tailwindcss/utilities.css" source(none);
                @source inline("p-6 rounded-xl bg-rose-950 text-primary animate-spin");
            CSS
            css = compile(source, File.join(directory, "compiled.css"))

            assert_includes css, ".p-6"
            assert_includes css, ".rounded-xl"
            assert_includes css, ".bg-rose-950"
            assert_includes css, "var(--color-rose-950"
            assert_includes css, "var(--lesli-color-primary)"
            assert_includes css, "var(--animate-spin"
            refute_match(/--(?:spacing|radius-xl|color-[\w-]+|lesli-[\w-]+)\s*:/, css)
        end
    end

    private

    def compile(source, destination)
        stdout, stderr, status = Open3.capture3(
            { "NODE_PATH" => SOURCE.join("../../node_modules").to_s },
            Tailwindcss::Ruby.executable,
            "-i", source.to_s, "-o", destination, "--silent"
        )
        assert status.success?, "Tailwind compilation failed: #{stdout}\n#{stderr}"
        File.read(destination)
    end
end
