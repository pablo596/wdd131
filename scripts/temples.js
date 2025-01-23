const hamburgerButton = document.getElementById("hamburgerButton");
const navigation = document.getElementById("navigation");

// Alternar visibilidad del menú
hamburgerButton.addEventListener("click", () => {
  navigation.classList.toggle("visible");
  // Cambiar icono entre ☰ y ✖
  hamburgerButton.textContent = navigation.classList.contains("visible")
    ? "✖"
    : "☰";
});
