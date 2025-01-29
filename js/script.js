const temperature = 10; // °C
const windSpeed = 15; // km/h

function calculateWindChill(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(2);
  }
  return "N/A";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("wind-chill").textContent = calculateWindChill(
    temperature,
    windSpeed
  );

  document.getElementById("current-year").textContent =
    new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
});
