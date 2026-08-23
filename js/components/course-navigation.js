const courseNavigationItems = document.querySelectorAll(
    ".course-navigation__item[data-course-section]"
);

const courseViews = document.querySelectorAll(
    ".course-view[data-course-view]"
);

courseNavigationItems.forEach(item => {
    item.addEventListener("click", () => {
        const section = item.dataset.courseSection;

        courseNavigationItems.forEach(navItem => {
            navItem.classList.remove("course-navigation__item--active");
        });

        courseViews.forEach(view => {
            view.hidden = view.dataset.courseView !== section;
        });

        item.classList.add("course-navigation__item--active");
    });
});