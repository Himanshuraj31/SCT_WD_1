document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navBar = document.getElementById("navbar");
    const navItems = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Toggle menu visibility on small screens
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Change navigation background color on scroll
    window.addEventListener("scroll", function () {
        let scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        let color1 = `rgb(${Math.floor(255 - scrollPercentage * 100)}, ${Math.floor(126 + scrollPercentage * 50)}, ${Math.floor(95 + scrollPercentage * 50)})`;
        let color2 = `rgb(${Math.floor(255 - scrollPercentage * 150)}, ${Math.floor(180 + scrollPercentage * 50)}, ${Math.floor(123 + scrollPercentage * 50)})`;
        navBar.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;

        // Highlight active link
        navItems.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            let rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});

// Change text when button is clicked
function changeText() {
    document.getElementById("dynamic-text").innerText = "🎊 Amazing! Keep exploring! 🎊";
}

// Change color of the box when clicked
function changeColor(element) {
    element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
s
