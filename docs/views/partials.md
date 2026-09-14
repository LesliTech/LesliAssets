# View partials

LesliAssets provides generated ERB partials containing the SVG symbol sprites used by the framework.

| Partial | Symbols provided |
| --- | --- |
| `lesli_assets/partials/application-lesli-icons-engines` | Engine icons |
| `lesli_assets/partials/application-lesli-icons-gems` | Gem and tool icons |
| `lesli_assets/partials/application-lesli-icons-flags` | Locale flags |
| `lesli_assets/partials/application-lesli-icons-social` | Social icons |

Render each required sprite once in a shared layout:

```erb
<div class="hidden" aria-hidden="true">
    <%= render("lesli_assets/partials/application-lesli-icons-gems") %>
</div>
```

The Lesli application layout already includes the engines sprite. A consuming application only needs to render the other groups it uses.

These files are generated from the SVG sources under `app/assets/icons/lesli_assets`. Add or modify icons at the source, then run `make build.icons`; do not hand-edit the generated partials.
