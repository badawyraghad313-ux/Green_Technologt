
// =========================
// MOBILE NAVIGATION
// =========================

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


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// =========================
// AUTOMATIC YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================
// SCROLL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    ".info-card, .impact-card, .definition-box"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(function (element) {

    element.classList.add("reveal");
    observer.observe(element);

});
