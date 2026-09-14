# Welcome email

The welcome email introduces a new user to Lesli and links them to their application.

Source: `source/mails/lesli/welcome.mjml`

Generated view: `app/views/lesli_assets/emails/lesli/welcome.html.erb`

## Required data

| Value | Purpose |
| --- | --- |
| `@params[:user]` | User object; `full_name` is used for the greeting |
| `@app[:host]` | Destination for the account button |

After editing the MJML source or a shared email fragment, run `make build.mails` and preview the generated email in a real mail client or Rails mailer preview.
