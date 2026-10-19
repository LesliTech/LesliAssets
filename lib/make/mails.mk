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
MJML_PARTIALS = $(MJML_SRC)/partials

MJML_FILES = \
	lesli/welcome \
	devise/confirmation_instructions \
	devise/reset_password_instructions

MJML = ./node_modules/.bin/mjml

MJML_OPTIONS = \
	--config.allowIncludes true \
	--config.filePath $(MJML_PARTIALS)

MJML_OPTIONS_DEV = \
	--config.minify false \
	--config.beautify false

MJML_OPTIONS_PROD = \
	--config.minify true \
	--config.beautify false \
	--config.minifyOptions='{"removeComments":true}'


.PHONY: build.mails prod.mails test.mails


build.mails: MJML_BUILD_OPTIONS = $(MJML_OPTIONS_DEV)
prod.mails: MJML_BUILD_OPTIONS = $(MJML_OPTIONS_PROD)


# Compile every template before replacing any generated Rails view.
build.mails prod.mails:
	@set -eu; \
	if [ ! -x "$(MJML)" ]; then \
		echo "MJML is not installed. Run npm install before compiling emails." >&2; \
		exit 1; \
	fi; \
	mkdir -p "$(MJML_DEST)"; \
	temp_dir=$$(mktemp -d "$(MJML_DEST)/.mails.XXXXXX"); \
	cleanup() { rm -rf "$$temp_dir"; }; \
	trap cleanup EXIT; \
	trap 'exit 1' HUP INT TERM; \
	for file in $(MJML_FILES); do \
		source_file="$(MJML_SRC)/$$file.mjml"; \
		temp_file="$$temp_dir/$$file.html.erb"; \
		mkdir -p "$${temp_file%/*}"; \
		echo "Compiling email: $$source_file"; \
		$(MJML) "$$source_file" -o "$$temp_file" $(MJML_OPTIONS) $(MJML_BUILD_OPTIONS); \
		ruby -pi -e 'sub(/[ \t]+$$/, "")' "$$temp_file"; \
		if grep -q '< %' "$$temp_file"; then \
			echo "Compilation produced invalid ERB in $$source_file" >&2; \
			exit 1; \
		fi; \
		if grep -q '<raw' "$$temp_file"; then \
			echo "Compilation left an MJML <raw> tag in $$source_file" >&2; \
			exit 1; \
		fi; \
		ruby -rerb -e 'RubyVM::InstructionSequence.compile(ERB.new(File.read(ARGV.fetch(0))).src, ARGV.fetch(0))' "$$temp_file"; \
	done; \
	for file in $(MJML_FILES); do \
		temp_file="$$temp_dir/$$file.html.erb"; \
		destination_file="$(MJML_DEST)/$$file.html.erb"; \
		mkdir -p "$${destination_file%/*}"; \
		mv "$$temp_file" "$$destination_file"; \
	done


# Compile both modes in isolation and ensure committed views match production.
test.mails:
	@set -eu; \
	temp_root=$$(mktemp -d "$${TMPDIR:-/tmp}/lesli-assets-mails.XXXXXX"); \
	cleanup() { rm -rf "$$temp_root"; }; \
	trap cleanup EXIT; \
	trap 'exit 1' HUP INT TERM; \
	$(MAKE) --no-print-directory build.mails MJML_DEST="$$temp_root/development"; \
	$(MAKE) --no-print-directory prod.mails MJML_DEST="$$temp_root/production"; \
	if ! diff -ru "$(MJML_DEST)" "$$temp_root/production"; then \
		echo "Generated email views are stale. Run make prod.mails and commit the result." >&2; \
		exit 1; \
	fi; \
	echo "Email templates compile correctly and generated views are current."
