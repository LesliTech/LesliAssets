/*
Lesli

Copyright (c) 2026, Lesli Technologies, S. A.

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


// · 
import { Calendar } from "fullcalendar";
import dayGridPlugin from "fullcalendar/daygrid";
import classicThemePlugin from "fullcalendar/themes/classic";
import spanishLocale from "fullcalendar/locales/es";


const CALENDAR_ELEMENT_NAME = "lesli-calendar";
const VIEWPORT_BREAKPOINTS = Object.freeze({
    tablet: 768,
    desktop: 1024
});


function getCalendarView(viewportWidth = window.innerWidth) {
    if (viewportWidth < VIEWPORT_BREAKPOINTS.tablet) return "dayGridDay";
    if (viewportWidth < VIEWPORT_BREAKPOINTS.desktop) return "dayGridWeek";

    return "dayGridMonth";
}


function decorateDayCell({ el, isToday }) {
    el.classList.add("lesli-calendar-day");
    el.classList.toggle("is-today", isToday);
}


function decorateDayHeader({ el }) {
    el.classList.add("lesli-calendar-day-header");
}


function decorateEvent({ el }) {
    el.classList.add("lesli-calendar-event");
    // External destinations must leave the application's current Turbo Frame.
    el.dataset.turboFrame = "_top";
}


// Use textContent so event titles are never interpreted as HTML.
function renderTextContent(className, text) {
    const element = document.createElement("span");
    element.className = className;
    element.textContent = text;

    return { domNodes: [element] };
}


class LesliCalendarElement extends HTMLElement {
    constructor() {
        super();

        this.calendar = null;
        this.lifecycleController = null;

        // Turbo invokes this callback outside the element's context.
        this.destroyCalendar = this.destroyCalendar.bind(this);
    }

    connectedCallback() {
        this.registerLifecycleEvents();
        this.renderCalendar();
    }

    disconnectedCallback() {
        this.lifecycleController?.abort();
        this.lifecycleController = null;
        this.destroyCalendar();
    }

    registerLifecycleEvents() {
        this.lifecycleController?.abort();
        this.lifecycleController = new AbortController();
        const options = { signal: this.lifecycleController.signal };

        // Cache the empty container, not FullCalendar's generated markup.
        document.addEventListener("turbo:before-cache", this.destroyCalendar, options);

        document.addEventListener("click", (event) => {
            const button = event.target.closest("[data-calendar-action]");
            if (!button || button.dataset.calendarTarget !== this.id) return;
            const action = button.dataset.calendarAction;
            if (["prev", "today", "next"].includes(action)) {
                this.calendar?.[action]();
            }
        }, options);

        document.addEventListener("turbo:submit-end", (event) => {
            if (event.detail.success && event.target.closest("#calendar-event-detail")) {
                this.calendar?.refetchEvents();
            }
        }, options);
    }

    getCalendarOptions() {
        return {
            plugins: [dayGridPlugin, classicThemePlugin],
            timeZone: "local",
            locales: [spanishLocale],
            locale: this.dataset.locale || "en",
            datesSet: ({ view }) => {
                const title = document.getElementById(this.dataset.titleId);
                if (title) title.textContent = view.title;
            },
            firstDay: 1,
            headerToolbar: false,
            initialView: getCalendarView(),
            showNonCurrentDates: true,
            dayMaxEvents: true,
            borderless: true,
            displayEventTime: false,
            views: {
                dayGrid: {
                    listItemEventBeforeClass: "lesli-calendar-event-dot"
                }
            },
            dayCellDidMount: decorateDayCell,
            dayHeaderDidMount: decorateDayHeader,
            eventInteractive: true,
            eventClick: (info) => this.openEvent(info),
            eventDidMount: decorateEvent,
            dayCellTopContent: (info) => renderTextContent(
                "lesli-calendar-day-number",
                info.dayNumberText
            ),
            dayHeaderContent: (info) => renderTextContent(
                "lesli-calendar-day-header-label",
                info.text
            ),
            eventContent: (info) => renderTextContent(
                "lesli-calendar-event-title",
                info.event.title
            ),

            // FullCalendar supplies the visible range as start/end query parameters.
            events: this.dataset.eventsUrl
        };
    }

    // Calendar owns local event details; other engines keep their destination links.
    openEvent({ event, jsEvent }) {
        if (event.extendedProps.source !== "calendar") return;
        const frame = document.getElementById("calendar-event-detail");
        if (!frame || !this.dataset.eventUrl) return;

        jsEvent.preventDefault();
        frame.replaceChildren();
        const url = this.dataset.eventUrl.replace("__EVENT_ID__", event.extendedProps.record_id);
        if (frame.getAttribute("src") === url) {
            frame.reload();
        } else {
            frame.src = url;
        }
        this.dispatchEvent(new CustomEvent("calendar-event", { bubbles: true }));
    }

    renderCalendar() {
        this.destroyCalendar();
        // Remove any markup restored from Turbo's cache.
        this.replaceChildren();

        this.calendar = new Calendar(this, this.getCalendarOptions());
        this.calendar.render();
    }

    destroyCalendar() {
        this.calendar?.destroy();
        this.calendar = null;
    }
}


// Turbo may evaluate this asset again during navigation.
if (!customElements.get(CALENDAR_ELEMENT_NAME)) {
    customElements.define(CALENDAR_ELEMENT_NAME, LesliCalendarElement);
}
