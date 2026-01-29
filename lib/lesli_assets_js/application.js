/*
Lesli

Copyright (c) 2025, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by LesliTech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · Import dependencies
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
import Trix from "trix";
import dayjs from "dayjs";
import Alpine from "alpinejs";
import ChartJs from "chart.js/auto";
import LesliChart from "./lesli_chart";
import debug from "lesli-js/debug/browser";
import "@37signals/lexxy"

//import * as Lexxy from "lexxy"


// · Make libs globally available
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
window.dayjs = dayjs
window.debug = debug
window.Alpine = Alpine
window.ChartJs = ChartJs
window.LesliChart = LesliChart


// · Init needed frameworks
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
Alpine.start()



// · Print a nice message to let the people know Lesli is running
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// console.clear()
// debug.lesli_message_warning("lesli?.company?.name") 
// debug.info("Lesli application", "lesli_application_version") 
debug.info("Ruby on Rails SaaS Development Framework", "Lesli") 
