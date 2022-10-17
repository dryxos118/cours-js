//* clic - se déclenche lors du clic
//* mousedown - le bouton est pressé
//* mouseup - le bouton est relâché
//* mouseenter - la souris se déplace sur un élément
//* mouseleave - la souris sort sur un élément

const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("tu a cliquer");
});

btn.addEventListener("mousedown", function () {
  console.log("down");
});

btn.addEventListener("mouseup", function () {
  console.log("up");
});

btn.addEventListener("mouseenter", function () {
  heading.classList.add("red");
});

btn.addEventListener("mouseleave", function () {
  heading.classList.remove("red");
});
