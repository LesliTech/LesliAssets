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
                assert_match(/--lesli-color-primary-700:\s*#194a99/i, css)
                assert_match(/--lesli-color-primary-500:\s*#276ad6/i, css)
                assert_includes css, "--lesli-color-primary: var(--lesli-theme-color-primary, var(--lesli-color-primary-700))"
                assert_includes css, "--lesli-color-primary-soft: color-mix(in srgb, var(--lesli-color-primary) 8%, white)"
                assert_includes css, "--lesli-color-primary-strong: color-mix(in srgb, var(--lesli-color-primary) 80%, black)"
                assert_match(/--color-primary\s*:/, css)
                assert_includes css, "@keyframes spin"

                if name == "application"
                    # Shared shell styles ship in this asset, without a second CSS request.
                    assert_includes css, ".lesli-shell-container"
                    refute_match(/@import.*utilities\.css/, css)
                end
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

    def test_unprefixed_responsive_utilities_use_the_shared_runtime_theme
        Dir.mktmpdir("lesli-responsive-theme") do |directory|
            source = File.join(directory, "component.css")
            File.write(source, <<~CSS)
                @import "tailwindcss/theme.css" theme(reference);
                @reference "#{SOURCE.join('settings/theme.css')}";
                @import "tailwindcss/utilities.css" layer(utilities) source(none);
                @source inline("p-4 sm:p-6 text-slate-700 text-primary bg-header bg-danger-50 rounded-xl");
            CSS
            css = compile(source, File.join(directory, "compiled.css"))

            assert_includes css, '.p-4'
            assert_includes css, '.sm\:p-6'
            assert_match(/var\(--spacing(?:,|\))/, css)
            assert_match(/var\(--color-slate-700(?:,|\))/, css)
            assert_match(/var\(--radius-xl(?:,|\))/, css)
            assert_includes css, "var(--lesli-color-primary)"
            assert_includes css, "var(--lesli-header-color)"
            assert_includes css, "var(--lesli-color-danger-50)"
            refute_includes css, "var(--lesliview-"
            refute_match(/--(?:lesliview-|spacing|color-|radius-|lesli-)[\w-]*\s*:/, css)
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
