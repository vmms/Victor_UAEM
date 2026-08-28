const scriptList = document.querySelector(".course-scripts");
const scriptView = document.querySelector(".course-script-view");
const scriptItems = Array.from(document.querySelectorAll(".course-practice-item[data-script-file]"));
if (scriptList && scriptView) {
    const backButton = scriptView.querySelector(".course-script-view__back");
    const numberElement = scriptView.querySelector(".course-script-view__number");
    const titleElement = scriptView.querySelector(".course-script-view__title");
    const contentElement = scriptView.querySelector(".course-script-view__content");
    const loadingElement = scriptView.querySelector(".course-script-view__loading");
    const errorElement = scriptView.querySelector(".course-script-view__error");
    const previousButton = scriptView.querySelector(".course-script-view__previous");
    const nextButton = scriptView.querySelector(".course-script-view__next");
    const scriptsNavigationButton = document.querySelector('.course-navigation__item[data-course-section="scripts"]');
    let currentScriptIndex = -1;
    const showScriptList = () => {
        scriptView.hidden = true;
        scriptList.hidden = false;
        currentScriptIndex = -1;
    };
    const resolveRelativeUrls = (scriptDocument, scriptUrl) => {
        const attributes = [
            ["img", "src"],
            ["source", "src"],
            ["video", "src"],
            ["audio", "src"],
            ["a", "href"]
        ];
        attributes.forEach(([selector, attribute]) => {
            scriptDocument.querySelectorAll(`${selector}[${attribute}]`).forEach(element => {
                const value = element.getAttribute(attribute);
                if (!value || value.startsWith("#") || value.startsWith("http://") || value.startsWith("https://") || value.startsWith("mailto:") || value.startsWith("tel:") || value.startsWith("data:")) return;
                element.setAttribute(attribute, new URL(value, scriptUrl).href);
            });
        });
    };
    const prepareScriptContent = (html, scriptUrl) => {
        const parser = new DOMParser();
        const scriptDocument = parser.parseFromString(html, "text/html");
        const firstH1 = scriptDocument.body.querySelector("h1");
        if (firstH1) firstH1.remove();
        resolveRelativeUrls(scriptDocument, scriptUrl);
        scriptDocument.body.querySelectorAll("script").forEach(script => script.remove());
        return scriptDocument.body.innerHTML;
    };
    const loadScript = async index => {
        const item = scriptItems[index];
        if (!item) return;
        currentScriptIndex = index;
        numberElement.textContent = item.dataset.scriptNumber;
        titleElement.textContent = item.dataset.scriptTitle;
        previousButton.disabled = index === 0;
        nextButton.disabled = index === scriptItems.length - 1;
        scriptList.hidden = true;
        scriptView.hidden = false;
        loadingElement.hidden = false;
        errorElement.hidden = true;
        contentElement.innerHTML = "";
        try {
            const scriptUrl = new URL(item.dataset.scriptFile, window.location.href);
            const response = await fetch(scriptUrl.href);
            if (!response.ok) throw new Error(`No se pudo cargar ${scriptUrl.href}`);
            const html = await response.text();
            contentElement.innerHTML = prepareScriptContent(html, scriptUrl);
            if (window.initializeCodeViewers) {
                window.initializeCodeViewers(contentElement);
            } else if (window.Prism) {
                Prism.highlightAllUnder(contentElement);
            }
        } catch (error) {
            errorElement.textContent = "No se pudo cargar el script. Revisa que el archivo HTML exista en la ruta indicada.";
            errorElement.hidden = false;
            console.error(error);
        } finally {
            loadingElement.hidden = true;
        }
        scriptView.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    scriptItems.forEach((item, index) => {
        item.addEventListener("click", event => {
            event.preventDefault();
            loadScript(index);
        });
    });
    backButton.addEventListener("click", showScriptList);
    previousButton.addEventListener("click", () => {
        if (currentScriptIndex > 0) loadScript(currentScriptIndex - 1);
    });
    nextButton.addEventListener("click", () => {
        if (currentScriptIndex < scriptItems.length - 1) loadScript(currentScriptIndex + 1);
    });
    if (scriptsNavigationButton) {
        scriptsNavigationButton.addEventListener("click", showScriptList);
    }
}