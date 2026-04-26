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



# Build javascript
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~

# javascript files
JS_ENTRYPOINTS = \
	./source/js/application.js \
	./source/js/calendar.js

JS_OUTDIR = ./app/assets/javascripts/lesli_assets/

# esbuild common options
ESBUILD = npx esbuild
ESBUILD_COMMON = --bundle --format=esm --outdir=$(JS_OUTDIR)
ESBUILD_DEV = --sourcemap --define:process.env.NODE_ENV=\"development\"
ESBUILD_PROD = --minify --tree-shaking=true --define:process.env.NODE_ENV=\"production\"

# build javascript for development
build.js:
	$(ESBUILD) $(JS_ENTRYPOINTS) $(ESBUILD_COMMON) $(ESBUILD_DEV)


# build javascript for development on every code change
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
watch.js:
	$(ESBUILD) $(JS_ENTRYPOINTS) $(ESBUILD_COMMON) $(ESBUILD_DEV) --watch


# Build javascript for production
prod.js:
	$(ESBUILD) $(JS_ENTRYPOINTS) $(ESBUILD_COMMON) $(ESBUILD_PROD)
