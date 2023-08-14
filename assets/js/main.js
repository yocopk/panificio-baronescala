// ===============HAMBURGER MENU============== //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// ===============SCROLL BUTTON============== //
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
let isScrolling = false;

window.addEventListener("scroll", () => {
  isScrolling = true;

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show"); // Aggiungi la classe "show"
  } else {
    scrollToTopBtn.classList.remove("show"); // Rimuovi la classe "show"
  }

  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    isScrolling = false;
  }, 350); // Cambia questo valore per regolare quando il pulsante appare
});

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // Per Safari
  document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE, Opera
});
