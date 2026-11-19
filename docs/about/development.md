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
| `make build.icons` | `app/assets/icons/lesli_assets` | SVG sprite partials under `app/views` |
| `make build.mails` | `source/mails` | Email views under `app/views/lesli_assets/emails` |
| `make build.tailwind` | workspace templates and Tailwind sources | Compiled Tailwind stylesheets |
| `make build` | All development targets | All generated development assets |

Tailwind CSS is the only stylesheet pipeline. Production targets use the `prod.*` names and enable minification where supported.

`make build.icons` uses the repository-local `node_modules/.bin/svgo`. If it reports that SVGO is missing, run `npm ci` from the LesliAssets directory before rebuilding.

## JavaScript compilation

`lib/make/js.mk` bundles two entrypoints with esbuild:

- `source/js/application.js`: shared dependencies and Alpine initialization.
- `source/js/calendar.js`: the calendar custom element and FullCalendar integration.

Both use `--bundle --format=iife`. An IIFE (Immediately Invoked Function
Expression) wraps each bundle in its own function scope. Rails loads these
files as deferred classic scripts, so this wrapper prevents their internal
variables from colliding, including names shortened during minification.
Do not use `--format=esm` with the current classic script tags: module output
does not provide module isolation when loaded as a classic script.

The globals explicitly assigned to `window` in `application.js` remain
available outside the wrapper. Engines reuse those globals instead of bundling
another copy of Alpine or Turbo.

Run these commands from the LesliAssets directory:

```shell
make build.js
make watch.js
make prod.js
```

`build.js` and `watch.js` include source maps. `prod.js` enables minification,
tree shaking, and the production environment. All three use IIFE isolation
and write to `app/assets/javascripts/lesli_assets`.

After changing the shared bundle, verify both a full page load and Turbo
navigation with Calendar loaded. Open an event panel to confirm that Alpine
and the independently compiled calendar bundle work together.

`LesliChart` releases its Chart.js instances before Turbo caches or replaces
the page. A single DOM observer also releases detached chart canvases when a
Frame or Stream removes their content. Moving a canvas within the document
keeps its instance alive; charts created outside LesliChart are not affected.

### JavaScript regression tests

Install the development dependencies and Playwright's Chromium once:

```shell
npm ci
npx playwright install chromium
make test.js
```

The browser tests in `test/javascript` compile both entrypoints through
`make prod.js` into a temporary directory. They load the minified bundles as
classic scripts, matching the Rails layout, and serve fixture responses through
Playwright. No Rails server, database, or changes to shipped assets are needed.

Coverage includes chart replacement, bubbling `markerClick` events, cleanup
after Frame and Stream updates, canvas moves, and repeated Turbo navigation.
The bundle integration tests verify that FullCalendar opens an Alpine panel
both on initial load and when Calendar is loaded after the shared bundle.
JavaScript page errors fail the tests. GitHub Actions runs this suite in Chromium.

These tests are separate from the Ruby/Minitest suite. Failed runs retain
Playwright traces under `test-results`, which is ignored by Git.

## Shared theme

`source/tailwind/application.css` and `public.css` emit the complete Tailwind
theme with `theme(static)`. The Lesli mappings in `settings/theme.css` use
`@theme inline static` so every semantic token is available, including tokens
used only by an independently compiled engine.

Engines, LesliView, and the optional Calendar stylesheet use `@reference` for the
theme. Engines generate utility selectors; LesliView applies utilities inside
its own component selectors. These consumers do not emit global theme variables. Tailwind's internal `--tw-*` properties and generated animation rules
remain part of the utilities and should not be removed manually.

Every layout must load either `lesli_assets/application` or `lesli_assets/public`
before those consumer stylesheets. Release the updated LesliAssets together with
the engines and LesliView adopting this contract. Rebuild and publish the
compiled CSS; updating the source files alone does not change installed gems.

`test/tailwind_theme_test.rb` compiles both shared entrypoints and an independent
consumer to verify that global tokens remain available without being duplicated.

## Style ownership and compilation

Install build dependencies with `npm ci`. The pinned `lesli-css` package supplies
`css/colors.css`, imported by both global entrypoints. Only its compiled color
variables are imported, not its Bulma or Sass styles. The published gem ships
the compiled CSS and does not need Node or lesli-css at runtime.

Keep account overrides in `settings/variables.css` and Tailwind mappings in
`settings/theme.css`; update the palette in lesli-css instead of duplicating it here.

| Package | Responsibility | Published selectors |
| --- | --- | --- |
| LesliAssets | Global theme, reset, fonts, icons and shared application styles | Standard utilities and shared rules |
| LesliView | Reusable components, partials, layouts, widgets and charts | Component classes such as `lesli-button` and `lesli-error` |
| Core and other engines | Their own pages and feature-specific presentation | Standard utilities and engine-specific rules |

LesliAssets and engines use unprefixed Tailwind classes, including variants such
as `sm:flex-row` and `hover:bg-slate-50`. No package uses Tailwind's package-prefix
option. Names such as `lesli-button` are ordinary component classes, and
`--lesli-color-primary` is a shared CSS variable; neither is a Tailwind prefix.

Every package keeps its own build. LesliAssets and engine entrypoints scan their
declared `@source` paths. LesliView disables utility discovery and explicitly
imports component stylesheets; those use `@apply` without publishing global
selectors such as `.flex` or `.text-sm`.

Common utility rules may appear in both LesliAssets and engine bundles. This
small duplication is intentional. Do not deduplicate generated CSS or create
manual lists of shared utility classes.

Every consumer imports Tailwind's default theme with `theme(reference)` and
references `settings/theme.css` for Lesli's semantic tokens. This single Lesli
mapping keeps `text-primary`, `bg-header` and semantic palettes available to
every independently compiled package without emitting global variables again.

Tailwind may include default fallbacks or compiled values for its standard
utilities, such as shadows. Lesli semantic colors reference the runtime
`--lesli-*` variables directly. Breakpoints remain compile-time values.

LesliAssets' `source/tailwind/application.css` defines the global theme, reset,
shared source discovery and application-shell rules in one entrypoint. They
compile into `lesli_assets/application.css`; no separate shared utility stylesheet
is loaded. Core loads that shared stylesheet, LesliView, and the active engine
stylesheet through the existing asset mechanism. Component sidecar files
are compiled into LesliView's single stylesheet, not loaded separately.

The documentation website still uses Bulma. Keep its previews and styling
separate from the Tailwind styles shipped by application packages.

## Rules for generated files

Do not hand-edit compiled CSS, bundled JavaScript, generated sprite partials, or compiled email HTML. Update the source and rebuild so the next compilation does not replace the change.

Run the Ruby tests after changing the gem or its build runners:

```shell
bundle exec rake
```
