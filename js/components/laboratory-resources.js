document.addEventListener("DOMContentLoaded", () => {
    const components = document.querySelectorAll(".laboratory-resources");
    components.forEach(component => {
        const resources = component.querySelectorAll(".laboratory-resource");
        resources.forEach(resource => {
            const button = resource.querySelector(".laboratory-resource__toggle");
            const content = resource.querySelector(".laboratory-resource__content");
            if (!button || !content) return;
            button.addEventListener("click", () => {
                const isOpen = resource.classList.contains("is-open");
                resources.forEach(otherResource => {
                    const otherButton = otherResource.querySelector(".laboratory-resource__toggle");
                    const otherContent = otherResource.querySelector(".laboratory-resource__content");
                    otherResource.classList.remove("is-open");
                    if (otherButton) otherButton.setAttribute("aria-expanded", "false");
                    if (otherContent) otherContent.hidden = true;
                });
                if (!isOpen) {
                    resource.classList.add("is-open");
                    button.setAttribute("aria-expanded", "true");
                    content.hidden = false;
                }
            });
        });
    });
});