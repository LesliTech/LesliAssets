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



# Build view partial to render svg icons
# · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
build.icons:
	svgo -f ./app/assets/icons/lesli_assets/engines -o ./app/assets/icons/lesli_assets/engines
	svgo -f ./app/assets/icons/lesli_assets/social -o ./app/assets/icons/lesli_assets/social
	svgo -f ./app/assets/icons/lesli_assets/flags -o ./app/assets/icons/lesli_assets/flags
	svgo -f ./app/assets/icons/lesli_assets/gems -o ./app/assets/icons/lesli_assets/gems
	
	svgeez build --prefix="" --source ./app/assets/icons/lesli_assets/engines --destination ./app/views/lesli_assets/partials/_application-lesli-icons-engines.svg
	svgeez build --prefix="" --source ./app/assets/icons/lesli_assets/social --destination ./app/views/lesli_assets/partials/_application-lesli-icons-social.svg
	svgeez build --prefix="" --source ./app/assets/icons/lesli_assets/flags --destination ./app/views/lesli_assets/partials/_application-lesli-icons-flags.svg
	svgeez build --prefix="" --source ./app/assets/icons/lesli_assets/gems --destination ./app/views/lesli_assets/partials/_application-lesli-icons-gems.svg

	mv ./app/views/lesli_assets/partials/_application-lesli-icons-engines.svg ./app/views/lesli_assets/partials/_application-lesli-icons-engines.html.erb
	mv ./app/views/lesli_assets/partials/_application-lesli-icons-social.svg ./app/views/lesli_assets/partials/_application-lesli-icons-social.html.erb
	mv ./app/views/lesli_assets/partials/_application-lesli-icons-flags.svg ./app/views/lesli_assets/partials/_application-lesli-icons-flags.html.erb
	mv ./app/views/lesli_assets/partials/_application-lesli-icons-gems.svg ./app/views/lesli_assets/partials/_application-lesli-icons-gems.html.erb
