const navToggle   = document.querySelector(".nav-toggle");
const navMenu     = document.querySelector(".nav-menu");
const themeToggle = document.querySelector(".theme-toggle");
const year        = document.querySelector("#year");


// Mobile navigation

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", isOpen);
});


// Close mobile navigation after selecting a link

navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});


// Theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
}

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem("theme", newTheme);
});


// Current year

year.textContent = new Date().getFullYear();
