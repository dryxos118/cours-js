const link = document.querySelector(".links");
const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", function () {
  link.classList.toggle("links-menu");
});
