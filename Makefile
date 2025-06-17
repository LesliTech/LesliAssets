
icons.build:
	svgo -f ./app/assets/icons/lesli_assets -o ./app/assets/icons/lesli_assets
	svgeez build --prefix="" --source ./app/assets/icons/lesli_assets --destination ./app/views/lesli_assets/partials/_application-lesli-icons.svg
	mv ./app/views/lesli_assets/partials/_application-lesli-icons.svg ./app/views/lesli_assets/partials/_application-lesli-icons.html.erb

alpine.build:
	npx esbuild ./lib/lesli_assets_alpine/application.js --bundle --outfile=./app/assets/javascripts/lesli_assets/application.js

alpine.production:
	npx esbuild ./lib/lesli_assets_alpine/application.js --bundle --outfile=./app/assets/javascripts/lesli_assets/application.js --minify

# Define source SCSS files and their corresponding CSS output paths
SASS_FILES = \
	./lib/lesli_assets_bulma/templates/application.scss:./app/assets/stylesheets/lesli_assets/templates/application.css \
	./lib/lesli_assets_bulma/templates/public.scss:./app/assets/stylesheets/lesli_assets/templates/public.css \
	./lib/lesli_assets_bulma/templates/start.scss:./app/assets/stylesheets/lesli_assets/templates/start.css

# Define common SASS options
SASS_OPTS = --no-source-map --load-path=node_modules --load-path=../

# Development
bulma.build:
	npx sass $(SASS_FILES) $(SASS_OPTS)

# Watch mode for development
bulma-watch:
	npx sass $(SASS_FILES) --watch $(SASS_OPTS)

# Production build (compressed output)
bulma-production:
	npx sass $(SASS_FILES) --style=compressed $(SASS_OPTS)

# Clean generated CSS files
bulma-clean:
	rm -f ./app/assets/stylesheets/lesli_assets/bulma.*.css
	rm -f ./app/assets/stylesheets/lesli_assets/bulma.*.css.map

# Default target
#.PHONY: bulma-build bulma-watch bulma-production bulma-clean icon-build alpine.build
