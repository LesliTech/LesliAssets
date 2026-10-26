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


// · 
import { Calendar } from "fullcalendar";
import dayGridPlugin from "fullcalendar/daygrid";
import classicThemePlugin from "fullcalendar/themes/classic";


// Keep names, fallbacks and breakpoints in one place so future layout
// changes do not require searching through the rendering lifecycle.
const CALENDAR_ELEMENT_NAME = "lesli-calendar";
const DEFAULT_EVENTS_URL = "/calendar/events.json";
const VIEWPORT_BREAKPOINTS = Object.freeze({
    tablet: 768,
    desktop: 1024
});


/**
 * Select the most useful calendar view for the available viewport width.
 *
 * Accepting the width as an argument keeps this function deterministic and
 * makes it easy to test or update the responsive rules later.
 */
function getCalendarView(viewportWidth = window.innerWidth) {
    if (viewportWidth < VIEWPORT_BREAKPOINTS.tablet) return "dayGridDay";
    if (viewportWidth < VIEWPORT_BREAKPOINTS.desktop) return "dayGridWeek";

    return "dayGridMonth";
}


/**
 * Report event-loading errors without blocking the interface with an alert.
 * This function is intentionally isolated so it can be connected to Lesli's
 * notification system later without changing the calendar configuration.
 */
function handleEventsFailure(error) {
    console.error("Lesli Calendar could not load its events.", error);
}


/**
 * Add stable Lesli classes without depending on FullCalendar's private DOM classes.
 */
function decorateDayCell({ el, isToday }) {
    el.classList.add("lesli-calendar-day");
    el.classList.toggle("is-today", isToday);
}


function decorateDayHeader({ el }) {
    el.classList.add("lesli-calendar-day-header");
}


function decorateEvent({ el }) {
    el.classList.add("lesli-calendar-event");
}


/**
 * FullCalendar accepts DOM nodes, which keeps server-provided text escaped.
 */
function renderTextContent(className, text) {
    const element = document.createElement("span");
    element.className = className;
    element.textContent = text;

    return { domNodes: [element] };
}


/**
 * Own one FullCalendar instance and its complete browser lifecycle.
 *
 * A Custom Element is used instead of global Turbo callbacks because this
 * asset belongs only to calendar pages. If Turbo evaluates the asset again,
 * the element registration guard below prevents duplicate event listeners.
 */
class LesliCalendarElement extends HTMLElement {
    constructor() {
        super();

        this.calendar = null;
        this.lifecycleController = null;

        // These methods are passed as callbacks and must retain this element
        // as their context when FullCalendar or Turbo invokes them.
        this.destroyCalendar = this.destroyCalendar.bind(this);
        this.handleCalendarResize = this.handleCalendarResize.bind(this);
    }

    /**
     * Render when the element becomes part of the document.
     */
    connectedCallback() {
        this.registerLifecycleEvents();
        this.renderCalendar();
    }

    /**
     * Release resources when Turbo or the browser removes the element.
     */
    disconnectedCallback() {
        this.lifecycleController?.abort();
        this.lifecycleController = null;
        this.destroyCalendar();
    }

    /**
     * Ensure Turbo caches the original empty container instead of generated
     * FullCalendar markup. AbortController also makes listener cleanup clear.
     */
    registerLifecycleEvents() {
        this.lifecycleController?.abort();
        this.lifecycleController = new AbortController();

        document.addEventListener(
            "turbo:before-cache",
            this.destroyCalendar,
            { signal: this.lifecycleController.signal }
        );
    }

    /**
     * Build the FullCalendar options separately from rendering.
     * New features can be added here without changing lifecycle behavior.
     */
    getCalendarOptions() {
        return {
            plugins: [dayGridPlugin, classicThemePlugin],
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
            windowResize: this.handleCalendarResize,
            events: {
                url: this.dataset.eventsUrl || DEFAULT_EVENTS_URL,
                method: "GET",
                failure: handleEventsFailure
            }
        };
    }

    /**
     * Keep the active view synchronized with the responsive breakpoint.
     * FullCalendar owns this resize callback and removes it on destroy().
     */
    handleCalendarResize(resizeInfo) {
        const nextView = getCalendarView();

        if (resizeInfo.view.type !== nextView) {
            this.calendar?.changeView(nextView);
        }
    }

    /**
     * Render exactly one calendar for this element.
     *
     * replaceChildren() removes markup from a restored Turbo snapshot before
     * FullCalendar starts, while destroyCalendar() makes repeated calls safe.
     */
    renderCalendar() {
        this.destroyCalendar();
        this.replaceChildren();

        this.calendar = new Calendar(this, this.getCalendarOptions());
        this.calendar.render();
    }

    /**
     * Release FullCalendar's DOM, network and resize resources.
     * Calling this method repeatedly is safe.
     */
    destroyCalendar() {
        this.calendar?.destroy();
        this.calendar = null;
    }
}


// Turbo can load this page-specific asset more than once. Registering only
// when necessary makes repeated evaluations harmless and preserves one clear
// lifecycle owner for every calendar element.
if (!customElements.get(CALENDAR_ELEMENT_NAME)) {
    customElements.define(CALENDAR_ELEMENT_NAME, LesliCalendarElement);
}
