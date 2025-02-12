// Array of product objects
const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

// Populate the product select element when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // The value is the product id
        option.textContent = product.name; // The displayed text is the product name
        productSelect.appendChild(option);
    });
});


let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount = parseInt(reviewCount) + 1;
localStorage.setItem('reviewCount', reviewCount);
document.getElementById('review-count').textContent = reviewCount;