const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  // let hexaColors = "#";

  // for (let i = 0; i < 6; i++) {
  //   hexaColors += hex[getRandomNumber()];
  // }
  //todo: solution plus pratique
  const hexaColors = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

  document.body.style.backgroundColor = hexaColors;
  color.textContent = hexaColors;
});

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }
