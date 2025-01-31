// script.js
function calculateWindChill(temp, windSpeed) {
  if (temp <= 10 && windSpeed > 4.8) {
    return (
      (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
      ).toFixed(1) + " °C"
    );
  } else {
    return "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Actualizar footer
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;

  // Calcular wind chill
  const temp = parseFloat(document.getElementById("temp").textContent);
  const windSpeed = parseFloat(
    document.getElementById("wind-speed").textContent
  );
  document.getElementById("wind-chill").textContent = calculateWindChill(
    temp,
    windSpeed
  );
});
