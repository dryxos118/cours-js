//* keypress - quand on tape sur une touche
//* keydown - quand on une touche est appuyé
//* keyup - quand une touche est relâché

const nameInput = document.querySelector("#name");
// console.log(nameInput);
// nameInput.addEventListener("keypress", function () {
//   console.log("t'a appyer sur une touche");
// });

// nameInput.addEventListener("keyup", function () {
//   console.log("t'a appyer sur une touche");
// });

// nameInput.addEventListener("keydown", function () {
//   console.log("t'a appyer sur une touche 2");
// });

nameInput.addEventListener("keyup", function () {
  console.log(nameInput.value);
});
