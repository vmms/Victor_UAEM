const initializeCodeViewers = (container = document) => {
    const viewers = container.querySelectorAll(".code-viewer");
    viewers.forEach(viewer => {
        if (viewer.dataset.codeViewerInitialized === "true") return;
        const code = viewer.querySelector("code");
        const linesContainer = viewer.querySelector(".code-viewer__lines");
        const copyButton = viewer.querySelector(".code-viewer__copy");
        const meta = viewer.querySelector(".code-viewer__meta");
        if (!code || !linesContainer) return;
        const rawCode = code.textContent.replace(/^\n/, "").replace(/\n\s*$/, "");
        code.textContent = rawCode;
        const lineCount = rawCode.split("\n").length;
        linesContainer.innerHTML = "";
        for (let i = 1; i <= lineCount; i++) {
            const line = document.createElement("span");
            line.className = "code-viewer__line-number";
            line.textContent = i;
            linesContainer.appendChild(line);
        }
        if (meta) meta.textContent = `${lineCount} ${lineCount === 1 ? "línea" : "líneas"}`;
        if (window.Prism) Prism.highlightElement(code);
        if (copyButton) {
            copyButton.addEventListener("click", async () => {
                try {
                    await navigator.clipboard.writeText(rawCode);
                    const text = copyButton.querySelector(".code-viewer__copy-text");
                    copyButton.classList.add("is-copied");
                    if (text) text.textContent = "Copiado";
                    setTimeout(() => {
                        copyButton.classList.remove("is-copied");
                        if (text) text.textContent = "Copiar código";
                    }, 1600);
                } catch (error) {
                    console.error("No se pudo copiar el código:", error);
                }
            });
        }
        viewer.dataset.codeViewerInitialized = "true";
    });
};

document.addEventListener("DOMContentLoaded", () => {
    initializeCodeViewers(document);
});

window.initializeCodeViewers = initializeCodeViewers;