const templates = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August 7",
    area: 11500,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/800%2C/0/default",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May 21",
    area: 7470,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/d9c313eb96c173d0ad32f21f461ce994129c9e8d/full/800%2C/0/default",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June 7",
    area: 96013,
    imageUrl:
      "https://news-pacific.churchofjesuschrist.org/media/400x400/Payson_Temple_Exterior_Day2015_resized.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May 2",
    area: 6601,
    imageUrl:
      "https://news-gu.churchofjesuschrist.org/media/640x480/yigo-temple-b.JPG",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November 19",
    area: 156558,
    imageUrl:
      "https://assets.churchofjesuschrist.org/19/c1/19c13ca567ed6bd0d72246717ee4dc34c35c8f6f/washington_dc_temple_lds.jpeg",
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January 10",
    area: 9600,
    imageUrl:
      "https://noticias-pe.laiglesiadejesucristo.org/media/960x720/Exterior-Templo-de-los-Olivos.jpeg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December 2",
    area: 116642,
    imageUrl:
      "https://newsroom.churchofjesuschrist.org/media/960x540/orig_1_Vista_exterior-1.jpg",
  },
  {
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August 1",
    area: 108000,
    imageUrl:
      "https://newsroom.churchofjesuschrist.org/media/960x540/Guayaquil-Ecuador-Temple1.jpg",
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022, November 20",
    area: 9350,
    imageUrl:
      "https://noticias-ec.laiglesiadejesucristo.org/media/960x540/Templo-de-Quito_exterior.jpeg",
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
