const dropdownItems = document.querySelectorAll('.dropdown');

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownItems.forEach(dropdown => {
      if (dropdown !== item) {
        dropdown.querySelector('.submenu').style.display = 'none';
      }
    });

    const submenu = item.querySelector('.submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  });
});

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

// Función para cargar y renderizar el archivo Markdown
function loadMarkdown(mdFile) {
    fetch(mdFile)
    .then(response => response.text())
    .then(data => {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = marked(data);
    })
    .catch(error => console.log('Error al cargar el archivo: ' + error));
}