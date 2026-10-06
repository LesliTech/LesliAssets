# Development

LesliAssets keeps editable sources and generated Rails assets separate. Make changes in the source location, run the matching build target, and commit the generated output when the repository already tracks it.

## Setup

```shell
git clone https://github.com/LesliTech/LesliAssets.git
cd LesliAssets
bundle install
npm ci
```

The asset builders expect Node.js 20.x, npm, and the standard Lesli workspace layout.

## Build targets

| Command | Source | Generated output |
| --- | --- | --- |
| `make build.js` | `source/js` | `app/assets/javascripts/lesli_assets` |
| `make build.css` | `source/scss` and engine SCSS | Rails stylesheets |
| `make build.icons` | `app/assets/icons/lesli_assets` | SVG sprite partials under `app/views` |
| `make build.mails` | `source/mails` | Email views under `app/views/lesli_assets/emails` |
| `make build.tailwind` | workspace templates and Tailwind sources | Compiled Tailwind stylesheets |
| `make build` | All development targets | All generated development assets |

Production targets use the `prod.*` names and enable minification where supported.

`make build.icons` uses the repository-local `node_modules/.bin/svgo`. If it reports that SVGO is missing, run `npm ci` from the LesliAssets directory before rebuilding.

## Rules for generated files

Do not hand-edit compiled CSS, bundled JavaScript, generated sprite partials, or compiled email HTML. Update the source and rebuild so the next compilation does not replace the change.

Run the Ruby tests after changing the gem or its build runners:

```shell
bundle exec rake
```
