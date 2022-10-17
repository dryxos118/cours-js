//* querySelector("any css"); - sélectionne un élément
//* querySelectorAll("any css"); - sélectionne plusieurs éléments et peut utiliser les méthode pour un tableau

const result = document.querySelector("#result");

result.style.backgroundColor = "blue";

const items = document.querySelector(".special");
// console.log(items);

const lastItem = document.querySelector("li:last-child");
// lastItem.style.color = "white";

const list = document.querySelectorAll(".special");

list.forEach(function (items) {
  console.log(items);
  items.style.color = "yellow";
});
