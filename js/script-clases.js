// Obtener el enlace "Collapsed menu" por su id
const collapseLink = document.getElementById("collapseLink");
// Obtener el elemento <ul> con el id "collapseExample2"
const collapseExample2 = document.getElementById("collapseExample2");
// Obtener el ícono en el enlace
const icon1 = collapseLink.querySelector(".fas.fa-chevron-down");

// Agregar un escuchador de eventos al enlace
collapseLink.addEventListener("click", function() {
  // Toggle de la clase "show" en el elemento <ul>
  collapseExample2.classList.toggle("show");

  // Cambiar dinámicamente el ícono
  if (icon1.classList.contains("fa-chevron-down")) {
    icon1.classList.remove("fa-chevron-down");
    icon1.classList.add("fa-chevron-up");
  } else {
    icon1.classList.remove("fa-chevron-up");
    icon1.classList.add("fa-chevron-down");
  }
});

// Obtener el enlace "Collapsed menu" por su id
const collapsePracticas = document.getElementById("collapsePracticas");
// Obtener el elemento <ul> con el id "collapseExample2"
const collapseExample1 = document.getElementById("collapseExample1");
// Obtener el ícono en el enlace
const icon2 = collapsePracticas.querySelector(".fas.fa-chevron-down");

// Agregar un escuchador de eventos al enlace
collapsePracticas.addEventListener("click", function() {
  // Toggle de la clase "show" en el elemento <ul>
  collapseExample1.classList.toggle("show");

  // Cambiar dinámicamente el ícono
  if (icon2.classList.contains("fa-chevron-down")) {
    icon2.classList.remove("fa-chevron-down");
    icon2.classList.add("fa-chevron-up");
  } else {
    icon2.classList.remove("fa-chevron-up");
    icon2.classList.add("fa-chevron-down");
  }
});

// Obtener el enlace "Collapsed menu" por su id
const collapseSlicer = document.getElementById("collapseSlicer");
// Obtener el elemento <ul> con el id "collapseExample2"
const collapseExample3 = document.getElementById("collapseExample3");
// Obtener el ícono en el enlace
const icon3 = collapseSlicer.querySelector(".fas.fa-chevron-down");


// Agregar un escuchador de eventos al enlace
collapseSlicer.addEventListener("click", function() {
  // Toggle de la clase "show" en el elemento <ul>
  collapseExample3.classList.toggle("show");

  // Cambiar dinámicamente el ícono
  if (icon3.classList.contains("fa-chevron-down")) {
    icon3.classList.remove("fa-chevron-down");
    icon3.classList.add("fa-chevron-up");
  } else {
    icon3.classList.remove("fa-chevron-up");
    icon3.classList.add("fa-chevron-down");
  }
});

// Función para contraer el menú principal
function collapseMainMenu() {
  const sidebarMenu = document.getElementById("sidebarMenu");
  if (sidebarMenu.classList.contains("show")) {
    sidebarMenu.classList.remove("show");
  }
}

// Agregar evento click a cada enlace dentro del menú
const linksInMenu = document.querySelectorAll("#sidebarMenu a");
linksInMenu.forEach((link) => {
  // Verificar si el enlace es un elemento <a> que colapsa el <ul>
  if (link.hasAttribute("data-mdb-toggle")) {
    link.addEventListener("click", (e) => {
      e.stopPropagation(); // Detener la propagación del evento click
    });
  } else {
    link.addEventListener("click", () => {
      collapseMainMenu(); // Contraer el menú principal
    });
  }
});

function goToHome() {
  console.log('Home')
  // Aquí puedes agregar el código para redirigir a la página de inicio
  // Por ejemplo, si quieres redirigir a index.html, puedes usar:
  window.location.href = "index.html";
}



// Función para cargar y renderizar el archivo Markdown
let markdownLoaded = false; // Variable para controlar si se cargó el Markdown

function goToHome() {
  // Redirige a tu archivo index.html
  window.location.href = "index.html";
}

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';


const contentDiv = document.getElementById('content');
const pdfViewerContainer = document.getElementById('pdfViewerContainer');
const pdfControls = document.getElementById('pdfControls');

// Función para cargar contenido Markdown
function loadMarkdown(mdFile) {
  pdfViewerContainer.style.display = 'none';
  pdfControls.style.display = 'none';
  contentDiv.style.display = 'block';
  fetch(mdFile)
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = marked(data, { langPrefix: 'hljs language-' });
      hljs.highlightAll();
    })
    .catch(error => console.log('Error al cargar el archivo Markdown: ' + error));
}

// Función para cargar un PDF
function loadPDF(pdfUrl) {
  console.log('loadPdf:' + pdfUrl);
  pdfViewerContainer.style.display = 'block';
  pdfControls.style.display = 'block';
  contentDiv.style.display = 'none';

  let currentPageNum = 1; // Página inicial
  let pdfDocInstance = null; // Instancia del documento PDF

  // Cargar PDF usando PDF.js
  pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc => {
  pdfDocInstance = pdfDoc; // Guardar la instancia del documento PDF

  // Crear un div para el visor de PDF
  const pdfViewer = document.createElement('div');
  pdfViewer.className = 'pdf-viewer';
  pdfViewerContainer.innerHTML = '';
  pdfViewerContainer.appendChild(pdfViewer);

  // Función para renderizar una página
  function renderPage(pageNum) {
    pdfDoc.getPage(pageNum).then(page => {
      const canvas = document.createElement('canvas');
      pdfViewer.appendChild(canvas);
      const context = canvas.getContext('2d');

      const viewport = page.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      page.render(renderContext);
    });
  }

  // Cargar y renderizar la página inicial
  renderPage(currentPageNum);

  // Función para ir a la página anterior
  function goToPreviousPage() {
    if (currentPageNum > 1) {
      currentPageNum--;
      pdfViewer.innerHTML = ''; // Limpiar el visor
      renderPage(currentPageNum);
    }
  }

  // Función para ir a la página siguiente
  function goToNextPage() {
    if (currentPageNum < pdfDoc.numPages) {
      currentPageNum++;
      pdfViewer.innerHTML = ''; // Limpiar el visor
      renderPage(currentPageNum);
    }
  }

  // Función para ir a la página de inicio
  function goToHomePage() {
    currentPageNum = 1;
    pdfViewer.innerHTML = ''; // Limpiar el visor
    renderPage(currentPageNum);
  }

  // Asignar funciones a los botones de navegación
  const prevPageButton = document.getElementById('prevPageButton');
  const nextPageButton = document.getElementById('nextPageButton');
  const homeButton = document.getElementById('homeButton');
  const downloadButton = document.getElementById("downloadButton");

  prevPageButton.addEventListener('click', goToPreviousPage);
  nextPageButton.addEventListener('click', goToNextPage);
  homeButton.addEventListener('click', goToHomePage);
  downloadButton.href = pdfUrl; // Establecer la URL del PDF en el enlace de descarga
  }).catch(error => {
    console.error('Error al cargar el PDF:', error);
  });
}