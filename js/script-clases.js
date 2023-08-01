// Obtener el enlace "Collapsed menu" por su id
const collapseLink = document.getElementById("collapseLink");
// Obtener el elemento <ul> con el id "collapseExample2"
const collapseExample2 = document.getElementById("collapseExample2");

// Agregar un escuchador de eventos al enlace
collapseLink.addEventListener("click", function() {
  // Toggle de la clase "show" en el elemento <ul>
  collapseExample2.classList.toggle("show");
});

// Obtener el enlace "Collapsed menu" por su id
const collapsePracticas = document.getElementById("collapsePracticas");
// Obtener el elemento <ul> con el id "collapseExample2"
const collapseExample1 = document.getElementById("collapseExample1");

// Agregar un escuchador de eventos al enlace
collapsePracticas.addEventListener("click", function() {
  // Toggle de la clase "show" en el elemento <ul>
  collapseExample1.classList.toggle("show");
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
  // Aquí puedes agregar el código para redirigir a la página de inicio
  // Por ejemplo, si quieres redirigir a index.html, puedes usar:
  window.location.href = "index.html";
}



// Función para cargar y renderizar el archivo Markdown
let markdownLoaded = false; // Variable para controlar si se cargó el Markdown

function loadMarkdown(mdFile) {
  if (!markdownLoaded) {
    fetch(mdFile)
      .then(response => response.text())
      .then(data => {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = marked(data, { langPrefix: 'hljs language-' });
        hljs.highlightAll(); // Aplica el resaltado de sintaxis a todos los bloques de código.
        markdownLoaded = true; // Marcar que el Markdown se ha cargado
      })
      .catch(error => console.log('Error al cargar el archivo: ' + error));
  }
}

function goToHome() {
  // Redirige a tu archivo index.html
  window.location.href = "index.html";
}