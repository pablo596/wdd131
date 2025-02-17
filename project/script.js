// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("PantrySense Website Loaded");


    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    const prevSlideBtn = document.querySelector(".carousel-btn.prev");
    const nextSlideBtn = document.querySelector(".carousel-btn.next");
    if (totalSlides) {
        prevSlideBtn.addEventListener("click", () => moveSlide(-1));
        nextSlideBtn.addEventListener("click", () => moveSlide(1))
    }

    function moveSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const track = document.querySelector(".carousel-track");
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }


    const emblaNode = document?.querySelector(".embla");
    if (emblaNode) {
        const viewport = emblaNode?.querySelector(".embla__viewport");
        const prevBtn = emblaNode?.querySelector(".embla__prev");
        const nextBtn = emblaNode?.querySelector(".embla__next");
        const embla = EmblaCarousel(viewport, { loop: true });

        prevBtn.addEventListener("click", () => embla.scrollPrev());
        nextBtn.addEventListener("click", () => embla.scrollNext());

    }

    // Contact Form Submission Handling
    const formElement = document.getElementById("contact-form");
    if (formElement) {
        const feedbackElement = document.getElementById("alert");
        const closeBtn = document.getElementById("closebtn");
        const emailInput = document.getElementById("mail");
        const ccEmailInput = document.getElementById("cc-email");

        formElement.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission

            // Copy the user's email into the "_cc" field to send them a confirmation email
            ccEmailInput.value = emailInput.value;

            const formData = new FormData(formElement);
            ;
            fetch("https://formsubmit.co/ajax/palaciosp.596@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    ;
                    if (data.success) {
                        feedbackElement.style.display = "block"; // Show success message
                        setTimeout(() => {
                            feedbackElement.style.display = "none"; // Hide message after 3 sec
                        }, 3000);
                        formElement.reset(); // Clear form fields after successful submission
                    } else {
                        ;
                        alert("Error sending the message. Please try again.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("There was a problem sending the form.");
                    ;
                });
        });

        // Close the alert message when clicking "X"
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                feedbackElement.style.display = "none";
            });
        }
    }


    // Load stored contact info if available
    if (localStorage.getItem("contactName")) {
        document.getElementById("name").value = localStorage.getItem("contactName");
        document.getElementById("mail").value = localStorage.getItem("contactEmail");
        document.getElementById("msg").value = localStorage.getItem("contactMessage");
    }

    // Lazy Loading Images for Performance
    const lazyImages = document.querySelectorAll("img");
    lazyImages.forEach((image) => {
        image.setAttribute("loading", "lazy");
    });

    // Dynamic Navbar Highlighting
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        if (link.href === currentLocation) {
            link.classList.add("page-active");
        } else {
            link.classList.remove("page-active");
        }
    });

    // Toggle Dark Mode (Optional Feature)
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Save theme preference in localStorage
            const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            localStorage.setItem("theme", currentTheme);
        });

        // Load saved theme preference
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    }


    const toggleButton = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    toggleButton.addEventListener("click", function () {

        navMenu.classList.toggle("show");
    });

    // Cerrar el menú cuando se haga clic en un enlace
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });


});
