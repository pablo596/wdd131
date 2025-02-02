const templates = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/aba_nigeria.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May 21",
    area: 7470,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/manti_utah.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June 7",
    area: 96013,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/payson_utah.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May 2",
    area: 6601,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/yigo_guam.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/washington_dc.jpg",
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/lima_peru.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/mexico_city_mexico.jpg",
  },
  {
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August 1",
    area: 108000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/guayaquil_ecuador.jpg",
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022, November 20",
    area: 9350,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/quito_ecuador.jpg",
  },
];

function displayTemplates(filteredTemplates) {
  const container = document.getElementById("template-container");
  container.innerHTML = ""; // Clear previous content

  filteredTemplates.forEach((template) => {
    const templateCard = document.createElement("div");
    templateCard.className = "template-card";
    templateCard.innerHTML = `
            <h2>${template.templeName}</h2>
            <p><strong>Location:</strong> ${template.location}</p>
            <p><strong>Dedicated:</strong> ${template.dedicated}</p>
            <p><strong>Size:</strong> ${template.area.toLocaleString()} sqft</p>
            <img src="${template.imageUrl}" alt="${
      template.templeName
    }" loading="lazy">
        `;
    container.appendChild(templateCard);
  });
}

function filterTemplates(criteria) {
  let filtered;
  switch (criteria) {
    case "old":
      filtered = templates.filter(
        (template) => new Date(template.dedicated).getFullYear() < 1950
      );
      break;
    case "new":
      filtered = templates.filter(
        (template) => new Date(template.dedicated).getFullYear() > 2000
      );
      break;
    case "large":
      filtered = templates.filter((template) => template.area > 9000);
      break;
    case "small":
      filtered = templates.filter((template) => template.area < 10000);
      break;
    default:
      filtered = templates;
  }
  displayTemplates(filtered);
}

// Initialize the page with all templates
window.onload = function () {
  displayTemplates(templates);
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
};
