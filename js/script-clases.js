// Objeto para almacenar el estado de cada menú colapsable
const menuFlags = {
  collapseExample1: {
    name: "collapseExample1",
    state: false,
    id: "collapsePracticas",
  },
  collapseExample2:  {
    name: "collapseExample2",
    state:false,
    id: "collapseLink",
  },
  collapseExample3:  {
    name: "collapseExample3",
    state:false,
    id:"collapseSlicer",
  }
};

// Función para cambiar dinámicamente el ícono del enlace
function cambiarIcono(){
  for (const menuId in menuFlags) {
    console.log("menuID: " + menuId + ", " + menuFlags[menuId].state);
    const menu = document.getElementById(menuFlags[menuId].id);
    const iconoDown = menu.querySelector(".fas.fa-chevron-down");
    const iconoUp = menu.querySelector(".fas.fa-chevron-up");

    if (iconoDown) {
      console.log("iconoDown")
      if (menuFlags[menuId].state == true) {
        // Si está expandido, cambiar el ícono a "fa-chevron-up"
        iconoDown.classList.remove("fa-chevron-down");
        iconoDown.classList.add("fa-chevron-up"); 
      } 
    } 
    if (iconoUp) {
      console.log("iconoUp")
      if (menuFlags[menuId].state == false)  {
        // Si está contraído, cambiar el ícono a "fa-chevron-down"
        iconoUp.classList.remove("fa-chevron-up");
        iconoUp.classList.add("fa-chevron-down");
      }
    }
  }
}



// Función para contraer todos los menús colapsables excepto el que se está expandiendo
function contraerYexpandir() {
  for (const menuId in menuFlags) {
    const menu = document.getElementById(menuFlags[menuId].name);
    if (menuFlags[menuId].state == true) {
      menu.classList.add('show');
    } else {
      menu.classList.remove('show');
    }
  }
}

function contraerOtrosMenus(exceptoEsteId) {
  for (const menuId in menuFlags) {
    if (menuId !== exceptoEsteId) {
      menuFlags[menuId].state = false;
    }
  }
}

// Obtener todos los enlaces "Collapsed menu" y agregarles un evento click
const collapseLinks = document.querySelectorAll('[data-mdb-toggle="collapse"]');
collapseLinks.forEach(collapseLink => {
  collapseLink.addEventListener("click", function() {
    const targetId = this.getAttribute('href').replace('#', '');
    const targetMenu = document.getElementById(targetId);
    console.log(targetId);
    // Si el menú actual está expandido, lo contraemos y cambiamos su bandera a false
    if (menuFlags[targetId].state) {
      menuFlags[targetId].state = false;
    } else {
      // Si el menú actual está contraído, lo expandimos, contraemos los demás y actualizamos las banderas
      menuFlags[targetId].state = true;
      contraerOtrosMenus(targetId);
    }
    contraerYexpandir();
    cambiarIcono();
  });
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

// ------------

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