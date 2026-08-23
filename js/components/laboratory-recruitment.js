document.addEventListener("DOMContentLoaded", () => {
    const components = document.querySelectorAll(".laboratory-recruitment");
    components.forEach(component => {
        const button = component.querySelector(".laboratory-recruitment__toggle");
        const details = component.querySelector(".laboratory-recruitment__details");
        if (!button || !details) return;
        button.addEventListener("click", () => {
            const isOpen = component.classList.toggle("is-open");
            button.setAttribute("aria-expanded", String(isOpen));
            details.hidden = !isOpen;
        });
    });
});