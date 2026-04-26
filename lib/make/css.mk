# Lesli
# 
# Copyright (c) 2026, Lesli Technologies, S. A.
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
# // · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
# // · 



# Compile bulma
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~

# Define source SCSS files and their corresponding CSS output paths
SASS_FILES = \
	./source/scss/templates:./app/assets/stylesheets/lesli_assets/ \
	../../engines/Lesli/source/scss:../../engines/Lesli/app/assets/stylesheets/lesli \
	../../engines/LesliShield/source/scss:../../engines/LesliShield/app/assets/stylesheets/lesli_shield \
	../../engines/LesliCalendar/source/scss:../../engines/LesliCalendar/app/assets/stylesheets/lesli_calendar

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
