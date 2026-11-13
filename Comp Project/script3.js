
document.addEventListener("DOMContentLoaded", () => {

  // MOBILE MENU

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

      const isOpen = nav.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

    });

    nav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  // SHOW AND HIDE PROJECT DETAILS

  document.querySelectorAll(".details-toggle").forEach(button => {

    button.addEventListener("click", () => {

      const details = button.nextElementSibling;

      const willOpen = details.hidden;

      details.hidden = !willOpen;

      button.setAttribute(
        "aria-expanded",
        String(willOpen)
      );

      button.querySelector("span").textContent =
        willOpen ? "−" : "＋";

      button.firstChild.textContent =
        willOpen ? "Hide details " : "How it works ";

    });

  });


  // SEARCH AND FILTER

  const cards = [
    ...document.querySelectorAll(".project-card")
  ];

  const searchInput =
    document.getElementById("project-search");

  const filterButtons = [
    ...document.querySelectorAll(".filter-btn")
  ];

  const count =
    document.getElementById("visible-count");

  const emptyState =
    document.getElementById("empty-state");

  let activeFilter = "all";


  function updateCards() {

    const query = (
      searchInput?.value || ""
    ).trim().toLowerCase();

    let visible = 0;

    cards.forEach(card => {

      const category = (
        card.dataset.category || ""
      ).split(" ");

      const searchableText = (
        card.dataset.search + " " + card.textContent
      ).toLowerCase();

      const matchesFilter =
        activeFilter === "all" ||
        category.includes(activeFilter);

      const matchesSearch =
        !query || searchableText.includes(query);

      const show =
        matchesFilter && matchesSearch;

      card.hidden = !show;

      if (show) {
        visible++;
      }

    });

    if (count) {
      count.textContent = visible;
    }

    if (emptyState) {
      emptyState.hidden = visible !== 0;
    }

  }


  // FILTER BUTTONS

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      activeFilter = button.dataset.filter;

      filterButtons.forEach(item => {

        item.classList.toggle(
          "active",
          item === button
        );

      });

      updateCards();

    });

  });


  // SEARCH INPUT

  searchInput?.addEventListener(
    "input",
    updateCards
  );


  // CURRENT YEAR

  const year =
    document.getElementById("current-year");

  if (year) {

    year.textContent = new Date().getFullYear();

  }


  // BACK TO TOP BUTTON

  const topButton =
    document.getElementById("back-to-top");

  if (topButton) {

    window.addEventListener("scroll", () => {

      topButton.classList.toggle(
        "visible",
        window.scrollY > 450
      );

    }, { passive: true });


    topButton.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }

});
