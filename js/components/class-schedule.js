/* =============================================================
   CLASS SCHEDULE
============================================================= */

document.querySelectorAll(".class-schedule").forEach(schedule => {

    const scheduleStart = schedule.dataset.start || "07:00";
    const scheduleEnd = schedule.dataset.end || "17:00";

    const scheduleHourHeight = parseFloat(
        getComputedStyle(schedule)
            .getPropertyValue("--schedule-hour-height")
    );

    const pixelsPerMinute = scheduleHourHeight / 60;

    const parseTime = time => {

        const [hours, minutes] = time.split(":").map(Number);

        return (hours * 60) + minutes;

    };

    const startMinutes = parseTime(scheduleStart);
    const endMinutes = parseTime(scheduleEnd);

    const totalMinutes = endMinutes - startMinutes;

    schedule.style.setProperty(
        "--schedule-height",
        `${totalMinutes * pixelsPerMinute}px`
    );



    /* =========================================================
       HORAS
    ========================================================== */

    schedule.querySelectorAll(".class-schedule__hour").forEach(hour => {

        const hourMinutes = parseTime(hour.dataset.time);

        const offset = hourMinutes - startMinutes;

        hour.style.setProperty(
            "--hour-top",
            `${offset * pixelsPerMinute}px`
        );

    });


    /* =========================================================
       EVENTOS
    ========================================================== */

    schedule.querySelectorAll(".class-schedule__event").forEach(event => {

        if (!event.dataset.start || !event.dataset.end) {
            return;
        }

        const eventStart = parseTime(event.dataset.start);
        const eventEnd = parseTime(event.dataset.end);

        const offset = eventStart - startMinutes;
        const duration = eventEnd - eventStart;

        event.style.setProperty(
            "--event-top",
            `${offset * pixelsPerMinute}px`
        );

        event.style.setProperty(
            "--event-height",
            `${duration * pixelsPerMinute}px`
        );

    });

});