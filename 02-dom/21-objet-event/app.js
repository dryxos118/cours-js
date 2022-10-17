//* argument de l'objet event e,evt ou event
//* info à propos de l'event déclenché
//* event.type
//* event.currentTarget
//* mot-clef this
//* preventDefault() - empêche le comportement par défaut

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

heading.addEventListener("click", function (event) {
  event.currentTarget.classList.toggle("blue");
  // console.log(this);
  // this.classList.toggle("blue");
});

btn.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("blue");

  // console.log(e.type);
});

const list = document.querySelector("#link");

function someFunction(e) {
  e.preventDefault();
}
link.addEventListener("click", someFunction);
