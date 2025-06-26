import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener("turbo:load", () => {

    let calendarEl = document.getElementById("lesli-calendar-engine");
    let calendar = new Calendar(calendarEl, {
        plugins: [ dayGridPlugin ],
        firstDay: 1,
        headerToolbar: false,
        initialView: "dayGridMonth",
        showNonCurrentDates: true,
        dayMaxEvents: true,
        editable: true,
        events: [],
    });

    calendar.render();
})
