// Obtener el año actual y mostrarlo en el footer
const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
  const currentYear = new Date().getFullYear();
  currentYearSpan.textContent = currentYear;
}

// Mostrar la última fecha de modificación
const lastModifiedDiv = document.querySelector("#lastModified");
if (lastModifiedDiv) {
  lastModifiedDiv.textContent = `Last Modification: ${document.lastModified}`;
}
