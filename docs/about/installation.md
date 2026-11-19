# Installation

LesliAssets packages the shared stylesheets, JavaScript, fonts, images, icons, and views used by Lesli applications. Consuming applications use the generated files shipped in the gem; they do not need the repository's Node.js build tools.

## Standard Lesli applications

Lesli installs LesliAssets as a dependency. The Rails engine exposes its packaged assets and views automatically, so no additional gem entry is required.

## Other Rails applications

Add the gem to the application:

```shell
bundle add lesli_assets
```

Require its main entry point if the application does not use Bundler auto-require:

```ruby
require "lesli_assets"
```

Verify the installation by rendering a packaged brand image:

```erb
<%= image_tag("lesli_assets/brand/app-logo.svg", alt: "Lesli") %>
```

Assets use the `lesli_assets` logical namespace. Generated icon sprites and email views are available through normal Rails partial and rendering helpers.

## Global JavaScript and Alpine

Core loads `lesli_assets/application.js` once in the application layout's
`<head>`, with `defer` and `data-turbo-track="reload"`. The latter makes Turbo
reload the page when the fingerprinted script changes after a deploy.
Standard Lesli layouts already include it; do not add a second script tag.

For a custom layout that needs the shared JavaScript, use:

```erb
<%= javascript_include_tag("lesli_assets/application", defer: true, "data-turbo-track": "reload") %>
```

The bundle loads Turbo and Lexxy, exposes `window.Alpine`, `window.dayjs`,
`window.debug`, `window.ChartJs`, and `window.LesliChart`, and calls
`Alpine.start()` once. Host applications and engines must not load another
copy of Alpine or Turbo or call `Alpine.start()` on each `turbo:load`.

Alpine provides local reactivity for components such as panels, tabs, and
menus. Views can use its directives without importing it again:

```html
<div x-data="{ open: false }">
    <button type="button" @click="open = !open" :aria-expanded="open">
        Toggle details
    </button>
    <div x-show="open" x-cloak>
        Details
    </div>
</div>
```

The shared application stylesheet includes the `[x-cloak]` rule. Keep visual
state and component cleanup with the component; engine-specific behavior
belongs to its engine. Turbo handles navigation and content updates, while
Alpine handles local interactions.

Calendar loads `lesli_assets/calendar.js` separately when needed. Each bundle
is compiled with IIFE isolation so its internal variables cannot overwrite
those of the other bundle. See [Development](/gems/assets/about/development)
for the build commands and compilation contract.

## Runtime and build requirements

The current development baseline is Ruby 3.3 or newer and Rails 8.1. The
release workflow uses Ruby 3.3.5. Node.js and npm are required only when
contributing to LesliAssets or rebuilding generated output. See
[Development](/gems/assets/about/development) for that workflow.
