# Email templates

LesliAssets provides responsive transactional email templates written in MJML and compiled to Rails ERB views.

## Templates

| Email | MJML source | Generated Rails view |
| --- | --- | --- |
| Welcome | `source/mails/lesli/welcome.mjml` | `app/views/lesli_assets/emails/lesli/welcome.html.erb` |
| Confirmation | `source/mails/devise/confirmation_instructions.mjml` | `app/views/lesli_assets/emails/devise/confirmation_instructions.html.erb` |
| Password reset | `source/mails/devise/reset_password_instructions.mjml` | `app/views/lesli_assets/emails/devise/reset_password_instructions.html.erb` |

Shared MJML fragments for the head, header, footer, logo, and social content live in `source/mails/partials`.

## Build workflow

Install the locked Node dependencies, then edit the MJML source and compile readable development output with:

```shell
make build.mails
```

Generate minified production output with:

```shell
make prod.mails
```

The HTML ERB files under `app/views/lesli_assets/emails` are generated artifacts. Make lasting changes in the MJML source or shared includes, then rebuild.

Both build modes compile every template into a temporary directory before replacing any generated Rails view. If one template fails, the existing generated views remain unchanged.

## Validation

Run the complete email build validation with:

```shell
make test.mails
```

This command compiles every template in development and production modes, validates the generated ERB syntax, rejects malformed ERB or residual MJML `<raw>` elements, and verifies that the committed Rails views match the production build.

The Ruby test suite renders each generated view with representative user and URL data:

```shell
bundle exec rake test
```

Before a release, also preview the emails at desktop and mobile widths and send them to Gmail, Apple Mail, and Outlook test inboxes. These clients use different rendering engines, so this final compatibility check cannot be replaced by HTML compilation alone.
