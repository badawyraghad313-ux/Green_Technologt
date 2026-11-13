
// Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close Menu After Clicking a Link

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Automatic Copyright Year

document.getElementById("year").textContent =
    new Date().getFullYear();
