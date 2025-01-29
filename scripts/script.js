function calculateWindChill(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windChill = calculateWindChill(temp, wind);
  document.getElementById("windChill").textContent = windChill;

  const lastModified = new Date(document.lastModified);
  document.getElementById("lastModified").textContent =
    lastModified.toLocaleString();
});
