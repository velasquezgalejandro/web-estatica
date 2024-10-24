document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("active"); // Cambia la clase para mostrar/ocultar el menú
  });
});
