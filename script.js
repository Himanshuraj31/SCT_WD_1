document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function() {
        var navbar = document.getElementById("navbar");
        var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        var color1 = `rgb(${Math.floor(255 - scrollPercentage * 100)}, ${Math.floor(126 + scrollPercentage * 50)}, ${Math.floor(95 + scrollPercentage * 50)})`;
        var color2 = `rgb(${Math.floor(255 - scrollPercentage * 150)}, ${Math.floor(180 + scrollPercentage * 50)}, ${Math.floor(123 + scrollPercentage * 50)})`;
        navbar.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
        
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });

        navLinks.forEach(link => {
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

function changeText() {
    document.getElementById("dynamic-text").innerText = "🎊 Amazing! Keep exploring! 🎊";
}

function changeColor(element) {
    element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}