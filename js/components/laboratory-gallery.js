document.addEventListener("DOMContentLoaded", () => {
    const galleries = document.querySelectorAll(".laboratory-gallery");
    galleries.forEach(gallery => {
        const track = gallery.querySelector(".laboratory-gallery__track");
        const slides = Array.from(gallery.querySelectorAll(".laboratory-gallery__slide"));
        const previousButton = gallery.querySelector(".laboratory-gallery__control--previous");
        const nextButton = gallery.querySelector(".laboratory-gallery__control--next");
        const indicators = Array.from(gallery.querySelectorAll(".laboratory-gallery__indicator"));
        if (!track || !slides.length || !previousButton || !nextButton) return;
        let currentIndex = 0;
        const updateGallery = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle("is-active", index === currentIndex);
                indicator.setAttribute("aria-current", index === currentIndex ? "true" : "false");
            });
        };
        const showPrevious = () => {
            currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
            updateGallery();
        };
        const showNext = () => {
            currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
            updateGallery();
        };
        previousButton.addEventListener("click", showPrevious);
        nextButton.addEventListener("click", showNext);
        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                currentIndex = index;
                updateGallery();
            });
        });
        updateGallery();
    });
});