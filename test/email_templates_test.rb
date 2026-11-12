# frozen_string_literal: true

require "erb"
require "pathname"
require "test_helper"

class EmailTemplatesTest < Minitest::Test
    ROOT = Pathname(__dir__).join("..").expand_path

    TEMPLATES = {
        confirmation: "lesli_assets/emails/devise/confirmation_instructions.html.erb",
        password_reset: "lesli_assets/emails/devise/reset_password_instructions.html.erb",
        welcome: "lesli_assets/emails/lesli/welcome.html.erb",
        account_invitation: "lesli_shield/invitation_mailer/account_invitation.html.erb"
    }.freeze

    PREHEADERS = {
        confirmation: "Confirm your email address to finish setting up your Lesli account.",
        password_reset: "Use this secure link to reset your Lesli password.",
        welcome: "Welcome to Lesli. Your workspace is ready.",
        account_invitation: "You have been invited to join an account on Lesli."
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

    def test_templates_use_the_shared_email_design
        TEMPLATES.each do |name, relative_path|
            template = read_template(relative_path)

            assert_includes template, PREHEADERS.fetch(name), relative_path
            assert_includes template, "#276AD6", relative_path
            assert_includes template, "#F8FAFC", relative_path
            assert_includes template, "#E5EAF0", relative_path
            assert_includes template, 'alt="Lesli"', relative_path
            assert_includes template, "<h1", relative_path
            refute_includes template, "fonts.googleapis.com", relative_path
        end
    end

    def test_templates_include_the_complete_shared_footer
        TEMPLATES.each_value do |relative_path|
            template = read_template(relative_path)

            assert_includes template, "Take Lesli with you", relative_path
            assert_includes template, "https://apps.apple.com/", relative_path
            assert_includes template, "https://play.google.com/store/apps", relative_path
            assert_includes template, "Follow Lesli", relative_path
            assert_includes template, "https://x.com/LesliTech", relative_path
            assert_includes template, "https://www.linkedin.com/company/leslitech/", relative_path
            assert_includes template, "lesli.dev", relative_path
        end
    end

    def test_email_sources_do_not_use_legacy_footer_markup
        source = source_mjml_files.map(&:read).join("\n")

        refute_includes source, 'target="blank"'
        refute_includes source, 'name="width-600"'
        assert_includes source, 'href="https://play.google.com/store/apps"'
    end

    def test_every_email_partial_is_referenced
        included_partials = source_mjml_files.flat_map do |file|
            file.read.scan(/<mj-include path="([^"]+)"/).flatten
        end
        unused_partials = partials_path.children.select do |file|
            file.extname == ".mjml" && !included_partials.include?(file.basename.to_s)
        end

        assert_empty unused_partials.map { |file| file.basename.to_s }
    end

    def test_password_reset_template_renders_name_and_url
        url = "https://example.test/password/edit?reset_password_token=reset-123"
        html = render(
            :password_reset,
            params: { full_name: "Ada Lovelace", url: url }
        )

        assert_includes html, "Hello Ada Lovelace"
        assert_includes html, %(href="#{url}")
        assert_includes html, "Reset my password"
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

    def test_account_invitation_renders_every_required_detail
        url = "https://example.test/invitation?invitation_token=invite-123"
        html = render(
            :account_invitation,
            params: {
                title: "You have been invited",
                description: "You have been invited to join Acme.",
                invited_by: "Invited by Ada Lovelace.",
                message: "We would love to have you on the team.",
                expiration: "This invitation expires on November 18, 2026.",
                action: "Accept invitation",
                ignore_notice: "If you did not expect this invitation, you can safely ignore this email.",
                acceptance_url: url
            }
        )

        assert_includes html, "Acme"
        assert_includes html, "Ada Lovelace"
        assert_includes html, "We would love to have you on the team."
        assert_includes html, "November 18, 2026"
        assert_includes html, "Accept invitation"
        assert_includes html, "safely ignore this email"
        assert_includes html, %(href="#{url}")
        assert_fully_rendered html
    end

    private

    def generated_views_path
        ROOT.join("app/views")
    end

    def partials_path
        ROOT.join("source/mails/partials")
    end

    def source_mjml_files
        ROOT.join("source/mails").glob("**/*.mjml")
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
