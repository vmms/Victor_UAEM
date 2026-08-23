/* =============================================================
   COURSE SYLLABUS
============================================================= */

document.querySelectorAll(".course-syllabus__toggle").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.closest(".course-syllabus__item");

        const isOpen = item.classList.toggle(
            "course-syllabus__item--open"
        );

        button.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

});