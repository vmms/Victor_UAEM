const slideList = document.querySelector(".course-slides");
const slideView = document.querySelector(".course-slide-view");

const slideItems = Array.from(
    document.querySelectorAll(
        ".course-practice-item[data-slide-file]"
    )
);

if (
    slideList &&
    slideView &&
    slideItems.length &&
    window.pdfjsLib
) {

    /* =============================================================
       PDF.JS
    ============================================================= */

    pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";


    /* =============================================================
       ELEMENTOS
    ============================================================= */

    const backButton =
        slideView.querySelector(
            ".course-slide-view__back"
        );

    const numberElement =
        slideView.querySelector(
            ".course-slide-view__number"
        );

    const titleElement =
        slideView.querySelector(
            ".course-slide-view__title"
        );

    const canvas =
        slideView.querySelector(
            ".course-slide-view__canvas"
        );

    const viewer =
        slideView.querySelector(
            ".course-slide-view__viewer"
        );

    const homeButton =
        slideView.querySelector(
            ".course-slide-view__home"
        );

    const previousButton =
        slideView.querySelector(
            ".course-slide-view__previous"
        );

    const nextButton =
        slideView.querySelector(
            ".course-slide-view__next"
        );

    const downloadButton =
        slideView.querySelector(
            ".course-slide-view__download"
        );

    const slidesNavigationButton =
        document.querySelector(
            '.course-navigation__item[data-course-section="diapositivas"]'
        );


    /* =============================================================
       ESTADO
    ============================================================= */

    let pdfDocument = null;
    let currentPage = 1;
    let currentRenderTask = null;


    /* =============================================================
       MOSTRAR LISTA
    ============================================================= */

    const showSlideList = () => {

        slideView.hidden = true;
        slideList.hidden = false;

        pdfDocument = null;
        currentPage = 1;

    };


    /* =============================================================
       RENDERIZAR PÁGINA
    ============================================================= */

    const renderPage = async pageNumber => {

        if (!pdfDocument) {
            return;
        }

        const page =
            await pdfDocument.getPage(
                pageNumber
            );


        /* =========================================================
           ESCALA RESPONSIVA
        ========================================================= */

        const baseViewport =
            page.getViewport({
                scale: 1
            });


        const availableWidth =
            Math.max(
                320,
                viewer.clientWidth - 40
            );


        const scale =
            Math.min(
                availableWidth /
                baseViewport.width,
                2
            );


        const viewport =
            page.getViewport({
                scale
            });


        const context =
            canvas.getContext("2d");


        canvas.width =
            Math.floor(
                viewport.width
            );

        canvas.height =
            Math.floor(
                viewport.height
            );


        canvas.style.width =
            `${viewport.width}px`;

        canvas.style.height =
            `${viewport.height}px`;


        if (currentRenderTask) {

            try {

                currentRenderTask.cancel();

            }

            catch (error) {

                console.warn(error);

            }

        }


        currentRenderTask =
            page.render({
                canvasContext: context,
                viewport
            });


        try {

            await currentRenderTask.promise;

        }

        catch (error) {

            if (
                error?.name !==
                "RenderingCancelledException"
            ) {

                console.error(error);

            }

        }


        currentRenderTask = null;


        /* =========================================================
           BOTONES
        ========================================================= */

        previousButton.disabled =
            currentPage === 1;

        homeButton.disabled =
            currentPage === 1;

        nextButton.disabled =
            currentPage ===
            pdfDocument.numPages;

    };


    /* =============================================================
       CARGAR PDF
    ============================================================= */

    const loadSlide = async item => {

        const pdfUrl =
            new URL(
                item.dataset.slideFile,
                window.location.href
            );


        numberElement.textContent =
            item.dataset.slideNumber;


        titleElement.textContent =
            item.dataset.slideTitle;


        downloadButton.href =
            pdfUrl.href;


        downloadButton.setAttribute(
            "download",
            pdfUrl.pathname
                .split("/")
                .pop()
        );


        slideList.hidden = true;
        slideView.hidden = false;


        try {

            pdfDocument =
                await pdfjsLib.getDocument(
                    pdfUrl.href
                ).promise;


            currentPage = 1;


            await renderPage(
                currentPage
            );

        }

        catch (error) {

            console.error(
                "No se pudo cargar el PDF:",
                error
            );

        }


        slideView.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    };


    /* =============================================================
       CLICK EN DIAPOSITIVA
    ============================================================= */

    slideItems.forEach(item => {

        item.addEventListener(
            "click",
            event => {

                event.preventDefault();

                loadSlide(item);

            }
        );

    });


    /* =============================================================
       TODAS LAS DIAPOSITIVAS
    ============================================================= */

    backButton.addEventListener(
        "click",
        showSlideList
    );


    /* =============================================================
       INICIO
    ============================================================= */

    homeButton.addEventListener(
        "click",
        async () => {

            if (
                !pdfDocument ||
                currentPage === 1
            ) {
                return;
            }


            currentPage = 1;

            await renderPage(
                currentPage
            );

        }
    );


    /* =============================================================
       ANTERIOR
    ============================================================= */

    previousButton.addEventListener(
        "click",
        async () => {

            if (
                !pdfDocument ||
                currentPage <= 1
            ) {
                return;
            }


            currentPage--;

            await renderPage(
                currentPage
            );

        }
    );


    /* =============================================================
       SIGUIENTE
    ============================================================= */

    nextButton.addEventListener(
        "click",
        async () => {

            if (
                !pdfDocument ||
                currentPage >=
                pdfDocument.numPages
            ) {
                return;
            }


            currentPage++;

            await renderPage(
                currentPage
            );

        }
    );


    /* =============================================================
       CLICK EN DIAPOSITIVAS DEL MENÚ
       SIEMPRE REGRESA A LA LISTA
    ============================================================= */

    if (slidesNavigationButton) {

        slidesNavigationButton
            .addEventListener(
                "click",
                showSlideList
            );

    }


    /* =============================================================
       REDIMENSIONAR
    ============================================================= */

    let resizeTimer = null;


    window.addEventListener(
        "resize",
        () => {

            if (!pdfDocument) {
                return;
            }


            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        renderPage(
                            currentPage
                        );

                    },
                    150
                );

        }
    );

}