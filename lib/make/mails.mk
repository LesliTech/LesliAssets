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



# Compile MJML email templates
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~

MJML_SRC = source/mails
MJML_DEST = app/views/lesli_assets/emails

MJML_FILES = \
	lesli/welcome \
	devise/confirmation_instructions \
	devise/reset_password_instructions

MJML = npx mjml

MJML_OPTIONS = \
	--config.allowIncludes true \
	--config.filePath $(MJML_SRC)/xyz

MJML_OPTIONS_DEV = \
	--config.minify false \
	--config.beautify true

MJML_OPTIONS_PROD = \
	--config.minify true \
	--config.beautify false \
	--config.minifyOptions='{"removeComments":true}'

Then:

# Development
build.mails:
	@for file in $(MJML_FILES); do \
		echo Compiling email: $(MJML_SRC)/$$file.mjml; \
		$(MJML) $(MJML_SRC)/$$file.mjml -o $(MJML_DEST)/$$file.html.erb $(MJML_OPTIONS) $(MJML_OPTIONS_DEV); \
	done

# Production build (compressed output)
prod.mails:
	@for file in $(MJML_FILES); do \
		echo Compiling email: $(MJML_SRC)/$$file.mjml; \
		$(MJML) $(MJML_SRC)/$$file.mjml -o $(MJML_DEST)/$$file.html.erb $(MJML_OPTIONS) $(MJML_OPTIONS_PROD); \
	done
