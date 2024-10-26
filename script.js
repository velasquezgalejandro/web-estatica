const button = document.getElementById("boton-agregar");

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("active"); // Cambia la clase para mostrar/ocultar el menú
  });
});

button.addEventListener("click", () => {
  if (button.textContent.includes("Agregar")) {
    button.textContent = "Agregado ✔";
    button.classList.remove("boton-agregar");
    button.classList.add("boton-agregado");
  } else {
    button.textContent = "Agregar +";
    button.classList.remove("boton-agregado");
    button.classList.add("boton-agregar");
  }
});
