const hamburgerButton = document.getElementById("hamburgerButton");
const navigation = document.getElementById("navigation");

// Toggle menu visibility
hamburgerButton.addEventListener("click", () => {
  navigation.classList.toggle("visible");
  // Change icon between ☰ and ✖
  hamburgerButton.textContent = navigation.classList.contains("visible")
    ? "✖"
    : "☰";
});
