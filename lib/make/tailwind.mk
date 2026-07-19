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


# LesliAssets should always be installed on rails_app/gems
ROOT ?= ../..
TAILWIND_EXT ?= css
TAILWIND_CMD ?= bundle exec tailwindcss


# 
define compile_tailwind

@#	Compile the LesliAssets core styles
$(TAILWIND_CMD) -i ./source/tailwind/templates/view.css -o ./app/assets/stylesheets/lesli_assets/view.tailwind.css $(TAILWIND_PARAMS)
$(TAILWIND_CMD) -i ./source/tailwind/templates/application.css -o ./app/assets/stylesheets/lesli_assets/application.tailwind.css $(TAILWIND_PARAMS)

@# Iterate over every app, engine and gem folder
@for folder in $(ROOT); do \
	\
	: "Get the current engine/gem folder name, example: LesliView"; \
	folder_name="$$(basename "$$folder")"; \
	\
	: "Convert folder name to Rails-style slug, example: LesliView -> lesli_view"; \
	folder_slug="$$(echo "$$folder_name" | sed -E 's/([a-z0-9])([A-Z])/\1_\2/g' | tr '[:upper:]' '[:lower:]')"; \
	\
	: "Build the expected Tailwind source folder path"; \
	source_folder="$$folder/source/tailwind"; \
	\
	: "Only continue if the current folder actually has source/tailwind"; \
	if [ -d "$$source_folder" ]; then \
		\
		: "Find all Tailwind input files directly inside source/tailwind"; \
		find "$$source_folder" -maxdepth 1 -type f -name "*.$(TAILWIND_EXT)" | while IFS= read -r file; do \
			\
			: "Get the CSS file name, example: application.css"; \
			file_name="$$(basename "$$file")"; \
			\
			: "Build the destination folder inside app/assets/stylesheets"; \
			if [ "$$folder_slug" != ".." ]; then \
				dist_folder="$$folder/app/assets/stylesheets/$$folder_slug"; \
			else \
				dist_folder="$$folder/app/assets/stylesheets"; \
			fi; \
			\
			: "Build the final destination file path"; \
			dist_file="$$dist_folder/$$file_name"; \
			\
			: "Create the destination folder if it does not exist"; \
			mkdir -p "$$dist_folder"; \
			\
			: "Compile the Tailwind source file into the destination CSS file"; \
			echo "Compiling $$file -> $$dist_file"; \
			$(TAILWIND_CMD) -i "$$file" -o "$$dist_file" $(TAILWIND_PARAMS); \
		done; \
	fi; \
done
endef


.PHONY: build.tailwind prod.tailwind watch.tailwind


build.tailwind: TAILWIND_PARAMS =
build.tailwind:
	$(compile_tailwind)

prod.tailwind: TAILWIND_PARAMS = --minify
prod.tailwind:
	$(compile_tailwind)

watch.tailwind: TAILWIND_PARAMS = --watch
watch.tailwind:
	$(compile_tailwind)
