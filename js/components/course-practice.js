const practiceList = document.querySelector(".course-practices");
const practiceView = document.querySelector(".course-practice-view");
const practiceItems = Array.from(
    document.querySelectorAll(".course-practice-item[data-practice-file]")
);

if (practiceList && practiceView && practiceItems.length) {

    const backButton = practiceView.querySelector(
        ".course-practice-view__back"
    );

    const numberElement = practiceView.querySelector(
        ".course-practice-view__number"
    );

    const titleElement = practiceView.querySelector(
        ".course-practice-view__title"
    );

    const contentElement = practiceView.querySelector(
        ".course-practice-view__markdown"
    );

    const loadingElement = practiceView.querySelector(
        ".course-practice-view__loading"
    );

    const errorElement = practiceView.querySelector(
        ".course-practice-view__error"
    );

    const previousButton = practiceView.querySelector(
        ".course-practice-view__previous"
    );

    const nextButton = practiceView.querySelector(
        ".course-practice-view__next"
    );

    const practicesNavigationButton = document.querySelector(
        '.course-navigation__item[data-course-section="practicas"]'
    );

    let currentPracticeIndex = -1;


    /* =============================================================
       MOSTRAR LISTA
    ============================================================= */

    const showPracticeList = () => {

        practiceView.hidden = true;
        practiceList.hidden = false;

        currentPracticeIndex = -1;

    };


    /* =============================================================
       CORREGIR RUTAS RELATIVAS DEL HTML CARGADO
    ============================================================= */

    const resolveRelativeUrls = (
        practiceDocument,
        practiceUrl
    ) => {

        const attributes = [
            ["img", "src"],
            ["source", "src"],
            ["video", "src"],
            ["audio", "src"],
            ["a", "href"]
        ];

        attributes.forEach(
            ([selector, attribute]) => {

                practiceDocument
                    .querySelectorAll(
                        `${selector}[${attribute}]`
                    )
                    .forEach(element => {

                        const value =
                            element.getAttribute(
                                attribute
                            );

                        if (
                            !value ||
                            value.startsWith("#") ||
                            value.startsWith("http://") ||
                            value.startsWith("https://") ||
                            value.startsWith("mailto:") ||
                            value.startsWith("tel:") ||
                            value.startsWith("data:")
                        ) {
                            return;
                        }

                        element.setAttribute(
                            attribute,
                            new URL(
                                value,
                                practiceUrl
                            ).href
                        );

                    });

            }
        );

    };


    /* =============================================================
       PREPARAR CONTENIDO
    ============================================================= */

    const preparePracticeContent = (
        html,
        practiceUrl
    ) => {

        const parser = new DOMParser();

        const practiceDocument =
            parser.parseFromString(
                html,
                "text/html"
            );


        /* =========================================================
           ELIMINAR TÍTULO DUPLICADO
        ========================================================= */

        const firstH1 =
            practiceDocument.body.querySelector(
                "h1"
            );

        if (firstH1) {
            firstH1.remove();
        }


        /* =========================================================
           CORREGIR IMÁGENES Y ENLACES
        ========================================================= */

        resolveRelativeUrls(
            practiceDocument,
            practiceUrl
        );


        /* =========================================================
           ELIMINAR SCRIPTS ANTIGUOS
        ========================================================= */

        practiceDocument.body
            .querySelectorAll("script")
            .forEach(script => {
                script.remove();
            });


        return practiceDocument.body.innerHTML;

    };


    /* =============================================================
       CARGAR PRÁCTICA
    ============================================================= */

    const loadPractice = async index => {

        const item = practiceItems[index];

        if (!item) {
            return;
        }

        currentPracticeIndex = index;


        /* =========================================================
           ENCABEZADO
        ========================================================= */

        numberElement.textContent =
            item.dataset.practiceNumber;

        titleElement.textContent =
            item.dataset.practiceTitle;


        /* =========================================================
           BOTONES ANTERIOR / SIGUIENTE
        ========================================================= */

        previousButton.disabled =
            index === 0;

        nextButton.disabled =
            index ===
            practiceItems.length - 1;


        /* =========================================================
           CAMBIAR VISTA
        ========================================================= */

        practiceList.hidden = true;
        practiceView.hidden = false;

        loadingElement.hidden = false;
        errorElement.hidden = true;

        contentElement.innerHTML = "";


        try {

            const practiceUrl =
                new URL(
                    item.dataset.practiceFile,
                    window.location.href
                );


            const response =
                await fetch(
                    practiceUrl.href
                );


            if (!response.ok) {

                throw new Error(
                    `No se pudo cargar ${practiceUrl.href}`
                );

            }


            const html =
                await response.text();


            contentElement.innerHTML =
                preparePracticeContent(
                    html,
                    practiceUrl
                );


            /* =====================================================
               PRISM
               Solo si ya está disponible en la página
            ===================================================== */

            if (window.Prism) {

                Prism.highlightAllUnder(
                    contentElement
                );

            }

        }

        catch (error) {

            errorElement.textContent =
                "No se pudo cargar la práctica. Revisa que el archivo HTML exista en la ruta indicada.";

            errorElement.hidden = false;

            console.error(error);

        }

        finally {

            loadingElement.hidden = true;

        }


        practiceView.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    };


    /* =============================================================
       CLICK EN UNA PRÁCTICA
    ============================================================= */

    practiceItems.forEach(
        (item, index) => {

            item.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    loadPractice(index);

                }
            );

        }
    );


    /* =============================================================
       COPIAR CÓDIGO
    ============================================================= */

    contentElement.addEventListener(
        "click",
        async event => {

            const button =
                event.target.closest(
                    ".copy-button"
                );

            if (!button) {
                return;
            }


            const container =
                button.closest(
                    ".code-container"
                );


            let code = null;


            if (container) {

                code =
                    container.querySelector(
                        "pre code"
                    );

            }


            if (
                !code &&
                button.previousElementSibling &&
                button.previousElementSibling.matches(
                    "pre"
                )
            ) {

                code =
                    button
                        .previousElementSibling
                        .querySelector("code");

            }


            if (!code) {
                return;
            }


            const originalText =
                button.textContent;


            try {

                await navigator.clipboard.writeText(
                    code.innerText
                );


                button.textContent =
                    "Copiado";


                window.setTimeout(
                    () => {

                        button.textContent =
                            originalText;

                    },
                    1400
                );

            }

            catch (error) {

                console.error(
                    "No se pudo copiar el código:",
                    error
                );

            }

        }
    );


    /* =============================================================
       TODAS LAS PRÁCTICAS
    ============================================================= */

    backButton.addEventListener(
        "click",
        showPracticeList
    );


    /* =============================================================
       PRÁCTICA ANTERIOR
    ============================================================= */

    previousButton.addEventListener(
        "click",
        () => {

            if (
                currentPracticeIndex > 0
            ) {

                loadPractice(
                    currentPracticeIndex - 1
                );

            }

        }
    );


    /* =============================================================
       PRÁCTICA SIGUIENTE
    ============================================================= */

    nextButton.addEventListener(
        "click",
        () => {

            if (
                currentPracticeIndex <
                practiceItems.length - 1
            ) {

                loadPractice(
                    currentPracticeIndex + 1
                );

            }

        }
    );


    /* =============================================================
       CLICK EN "PRÁCTICAS DE LABORATORIO"
    ============================================================= */

    if (practicesNavigationButton) {

        practicesNavigationButton
            .addEventListener(
                "click",
                showPracticeList
            );

    }

}