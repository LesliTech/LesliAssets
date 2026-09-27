# frozen_string_literal: true

require "test_helper"
require "lesli_assets/version"

class VersionTest < Minitest::Test
    def test_version_is_a_semantic_version
        reload_version_file

        assert_instance_of(String, LesliAssets::VERSION)
        assert_match(/\A\d+\.\d+\.\d+\z/, LesliAssets::VERSION)
        assert(Gem::Version.correct?(LesliAssets::VERSION))
    end

    def test_build_is_a_unix_timestamp
        assert_instance_of(String, LesliAssets::BUILD)
        assert_match(/\A\d+\z/, LesliAssets::BUILD)
        assert_operator(LesliAssets::BUILD.to_i, :>, 0)
    end

    def test_gemspec_uses_the_library_version
        gemspec = Gem::Specification.load(File.expand_path("../lesli_assets.gemspec", __dir__))

        refute_nil(gemspec)
        assert_equal(Gem::Version.new(LesliAssets::VERSION), gemspec.version)
    end

    private

    def reload_version_file
        previous_verbosity = $VERBOSE
        $VERBOSE = nil
        load(File.expand_path("../lib/lesli_assets/version.rb", __dir__))
    ensure
        $VERBOSE = previous_verbosity
    end
end
