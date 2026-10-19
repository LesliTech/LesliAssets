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



include lib/make/js.mk
include lib/make/css.mk
include lib/make/icons.mk
include lib/make/mails.mk
include lib/make/version.mk
include lib/make/tailwind.mk


.PHONY: help


help:
	@echo "Available commands:"
	@echo "  make build.css"
	@echo "  make build.mails"
	@echo "  make prod.mails"
	@echo "  make test.mails"


build: build.js build.css build.icons build.mails build.tailwind
prod: prod.js prod.css prod.mails prod.version prod.tailwind
