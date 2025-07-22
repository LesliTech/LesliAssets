# Lesli
# 
# Copyright (c) 2025, Lesli Technologies, S. A.
# 
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with this program. If not, see http://www.gnu.org/licenses/.
# 
# Lesli · Ruby on Rails SaaS Development Framework.
# 
# Made with ♥ by LesliTech
# Building a better future, one line of code at a time.
# 
# @contact  hello@lesli.tech
# @website  https://www.lesli.tech
# @license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html
# 
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
# · 



# Build view partial to render svg icons
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
build.icons:
	svgo -f ./app/assets/icons/lesli_assets/engines -o ./app/assets/icons/lesli_assets/engines
	svgo -f ./app/assets/icons/lesli_assets/flags -o ./app/assets/icons/lesli_assets/flags
	svgo -f ./app/assets/icons/lesli_assets/gems -o ./app/assets/icons/lesli_assets/gems
	
	svgeez build --prefix="" --source ./app/assets/icons/lesli_assets/engines --destination ./app/views/lesli_assets/partials/_application-lesli-icons-engines.svg
	svgeez build --prefix="" --source ./app/assets/icons/lesli_assets/flags --destination ./app/views/lesli_assets/partials/_application-lesli-icons-flags.svg
	svgeez build --prefix="" --source ./app/assets/icons/lesli_assets/gems --destination ./app/views/lesli_assets/partials/_application-lesli-icons-gems.svg

	mv ./app/views/lesli_assets/partials/_application-lesli-icons-engines.svg ./app/views/lesli_assets/partials/_application-lesli-icons-engines.html.erb
	mv ./app/views/lesli_assets/partials/_application-lesli-icons-flags.svg ./app/views/lesli_assets/partials/_application-lesli-icons-flags.html.erb
	mv ./app/views/lesli_assets/partials/_application-lesli-icons-gems.svg ./app/views/lesli_assets/partials/_application-lesli-icons-gems.html.erb



# Build javascript
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
build.js:
	npx esbuild ./lib/lesli_assets_js/application.js --bundle --outfile=./app/assets/javascripts/lesli_assets/application.js --minify
	npx esbuild ./lib/lesli_assets_js/calendar.js --bundle --outfile=./app/assets/javascripts/lesli_assets/calendar.js --minify



# Compile bulma
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~

# Define source SCSS files and their corresponding CSS output paths
SASS_FILES = \
	./lib/lesli_assets_css/templates:./app/assets/stylesheets/lesli_assets/templates/ \
	../../engines/LesliShield/lib/scss:../../engines/LesliShield/app/assets/stylesheets/lesli_shield

# Define common SASS options
SASS_OPTS = --no-source-map --load-path=node_modules --load-path=../ --load-path=../../engines 

# Development
build.css:
	npx sass $(SASS_FILES) $(SASS_OPTS)

# Watch mode for development
watch.css:
	npx sass $(SASS_FILES) --watch $(SASS_OPTS)

# Production build (compressed output)
prod.css:
	npx sass $(SASS_FILES) --style=compressed $(SASS_OPTS)

# Clean generated CSS files
clean.css:
	rm -f ./app/assets/stylesheets/lesli_assets/bulma.*.css
	rm -f ./app/assets/stylesheets/lesli_assets/bulma.*.css.map



# Compile tailwind
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
tailwind.build:
    #npx @tailwindcss/cli -i ./lib/lesli_styles_tailwind/tailwind.app.css -o ./app/assets/stylesheets/lesli_assets/application.tailwind.css --verbose

tailwind.production:
    #npx @tailwindcss/cli -i ./lib/lesli_styles_tailwind/tailwind.app.css -o ./app/assets/stylesheets/lesli_assets/application.tailwind.css --minify --verbose


build: build.js build.css


# Default target
#.PHONY: bulma-build bulma-watch bulma-production bulma-clean icon-build alpine.build
