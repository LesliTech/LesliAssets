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
TAILWIND_CMD ?= bundle exec tailwindcss
TAILWIND_PATTERN ?= *.tailwind.css
TAILWIND_SILENT ?= --silent
TAILWIND_CAPTURE ?= 1


# 
define compile_tailwind

@# Discover Tailwind entrypoints and map them to Rails asset folders.
@set -e; \
root="$$(cd "$(ROOT)" && pwd)"; \
find "$$root" \
	\( -type d \( -name node_modules -o -name vendor -o -name tmp -o -name .git -o -path '*/app/assets' \) -prune \) \
	-o \( -type f -name '$(TAILWIND_PATTERN)' -path '*/source/tailwind/*' -print \) \
	| sort | while IFS= read -r file; do \
		\
		: "Everything before /source/tailwind is the Rails app, engine, or gem root"; \
		package_root="$${file%%/source/tailwind/*}"; \
		source_folder="$$package_root/source/tailwind"; \
		relative_file="$${file#$$source_folder/}"; \
		\
		: "Rails apps write directly to stylesheets; engines and gems use a namespace"; \
		if [ "$$package_root" = "$$root" ]; then \
			dist_folder="$$package_root/app/assets/stylesheets"; \
		else \
			package_name="$$(basename "$$package_root")"; \
			package_slug="$$(printf '%s' "$$package_name" | sed -E 's/([a-z0-9])([A-Z])/\1_\2/g' | tr '[:upper:]' '[:lower:]')"; \
			dist_folder="$$package_root/app/assets/stylesheets/$$package_slug"; \
		fi; \
		\
		dist_file="$$dist_folder/$$relative_file"; \
		mkdir -p "$$(dirname "$$dist_file")"; \
		\
		if [ "$(TAILWIND_CAPTURE)" = "1" ]; then \
			log_file="$$(mktemp "$${TMPDIR:-/tmp}/lesli-tailwind.XXXXXX")"; \
			if $(TAILWIND_CMD) -i "$$file" -o "$$dist_file" $(TAILWIND_PARAMS) $(TAILWIND_SILENT) >"$$log_file" 2>&1; then \
				file_size="$$(wc -c < "$$dist_file" | tr -d '[:space:]')"; \
				printf '[tailwind] built %s -> %s (%s bytes)\n' "$$relative_file" "$$dist_file" "$$file_size"; \
				rm -f "$$log_file"; \
			else \
				exit_status=$$?; \
				printf '[tailwind] ERROR building %s\n' "$$file" >&2; \
				sed 's/^/  /' "$$log_file" >&2; \
				rm -f "$$log_file"; \
				exit $$exit_status; \
			fi; \
		else \
			printf '[tailwind] watching %s -> %s\n' "$$relative_file" "$$dist_file"; \
			$(TAILWIND_CMD) -i "$$file" -o "$$dist_file" $(TAILWIND_PARAMS) $(TAILWIND_SILENT); \
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
watch.tailwind: TAILWIND_CAPTURE = 0
watch.tailwind:
	$(compile_tailwind)
