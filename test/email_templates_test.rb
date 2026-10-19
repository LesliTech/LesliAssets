# frozen_string_literal: true

require "erb"
require "pathname"
require "test_helper"

class EmailTemplatesTest < Minitest::Test
    ROOT = Pathname(__dir__).join("..").expand_path

    TEMPLATES = {
        confirmation: "devise/confirmation_instructions.html.erb",
        password_reset: "devise/reset_password_instructions.html.erb",
        welcome: "lesli/welcome.html.erb"
    }.freeze

    RenderContext = Struct.new(:params, :app) do
        def initialize(params:, app: {})
            super(params, app)
            @params = params
            @app = app
        end

        def binding_for_template
            binding
        end
    end

    User = Struct.new(:full_name)

    def test_generated_views_are_valid_html_erb
        TEMPLATES.each_value do |relative_path|
            template = read_template(relative_path)

            assert_equal 1, template.scan(/<!doctype html>/i).length, relative_path
            assert_equal 1, template.scan(/<html[ >]/i).length, relative_path
            assert_equal 1, template.scan(/<body[ >]/i).length, relative_path
            refute_includes template, "< %", relative_path
            refute_includes template, "<raw", relative_path

            RubyVM::InstructionSequence.compile(
                ERB.new(template).src,
                relative_path
            )
        end
    end

    def test_confirmation_template_renders_its_url
        url = "https://example.test/confirmation?confirmation_token=confirm-123"
        html = render(:confirmation, params: { url: url })

        assert_includes html, %(href="#{url}")
        assert_includes html, "Confirm my account"
        assert_fully_rendered html
    end

    def test_password_reset_template_renders_name_and_url
        url = "https://example.test/password/edit?reset_password_token=reset-123"
        html = render(
            :password_reset,
            params: { full_name: "Ada Lovelace", url: url }
        )

        assert_includes html, "Hello Ada Lovelace"
        assert_includes html, %(href="#{url}")
        assert_includes html, "valid for 6 hours"
        assert_fully_rendered html
    end

    def test_welcome_template_renders_trimmed_name_and_application_url
        url = "https://example.test/"
        html = render(
            :welcome,
            params: { user: User.new("  Grace Hopper  ") },
            app: { host: url }
        )

        assert_includes html, "Hi Grace Hopper."
        assert_includes html, %(href="#{url}")
        assert_fully_rendered html
    end

    private

    def generated_views_path
        ROOT.join("app/views/lesli_assets/emails")
    end

    def read_template(relative_path)
        generated_views_path.join(relative_path).read
    end

    def render(name, params:, app: {})
        context = RenderContext.new(params: params, app: app)
        ERB.new(read_template(TEMPLATES.fetch(name))).result(
            context.binding_for_template
        )
    end

    def assert_fully_rendered(html)
        refute_includes html, "<%"
        refute_includes html, "<raw"
    end
end
