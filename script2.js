
// GOVERNORATES SEARCH

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".governorate-card");

const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value
        .trim()
        .toLowerCase();

    let found = 0;

    cards.forEach(function (card) {

        const name = card.dataset.name.toLowerCase();

        const content = card.textContent.toLowerCase();

        if (
            name.includes(searchValue) ||
            content.includes(searchValue)
        ) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });

    noResults.style.display =
        found === 0 ? "block" : "none";

});


// SCROLL ANIMATION

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    { threshold: 0.1 }
);

cards.forEach(function (card) {

    card.classList.add("reveal");

    observer.observe(card);

});
