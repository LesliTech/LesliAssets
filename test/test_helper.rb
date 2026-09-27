# frozen_string_literal: true


# load lesli testing tools
require "lesli_testing"


# register engine for testing
LesliTesting.gem("LesliAssets", {
    :coverage_min_coverage => 60
})


# Running tests
require "minitest/autorun"
