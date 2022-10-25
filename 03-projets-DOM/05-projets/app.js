const btnOn = document.querySelector(".btn-on");
const btnOff = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar");

btnOn.addEventListener("click", function () {
  sidebar.classList.add("sidebar-active");
});

btnOff.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-active");
});
