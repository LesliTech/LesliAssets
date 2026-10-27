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



ROOT := ../..


define SYNC_VERSION_BUILD
file_path = ARGV.fetch(0)
accessed_at = File.atime(file_path)
modified_at = File.mtime(file_path)
modification_timestamp = modified_at.to_i.to_s
content = File.read(file_path)

# Capture the assignment separately from its value so the existing indentation
# and formatting remain unchanged when BUILD is replaced.
build_pattern = /^(?<assignment>\s*BUILD\s*=\s*)"(?<value>[^"]*)"/
build_match = content.match(build_pattern)

abort("BUILD constant not found in #{file_path}") unless build_match
exit if build_match[:value] == modification_timestamp

new_assignment = %(#{build_match[:assignment]}"#{modification_timestamp}")
updated_content = content.sub(build_pattern, new_assignment)
File.write(file_path, updated_content)

# Updating BUILD is metadata synchronization, so retain the source modification
# time. This keeps the task idempotent: the next run sees BUILD == mtime.
File.utime(accessed_at, modified_at, file_path)

puts "Updated #{file_path} -> BUILD = #{modification_timestamp}"
endef
export SYNC_VERSION_BUILD


.PHONY: prod.version

# Run the synchronization once per file so an unchanged file can exit early
# without preventing the remaining version files from being checked.
prod.version:
	@for dir in $(ROOT)/engines $(ROOT)/gems; do \
		if [ -d "$$dir" ]; then \
			find "$$dir" -type f -path "*/lib/*/version.rb" \
				-exec ruby -e "$$SYNC_VERSION_BUILD" {} \;; \
		fi; \
	done
