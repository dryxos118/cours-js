//*className
//*classList

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");

const classValue = first.className;
// console.log(classValue);
//afecte une class
second.className = "colors text";

//ajoute une classe
third.classList.add("text", "colors");
//suprime la class
third.classList.remove("text");

let result = third.classList.contains("colors"); //true or false

if (result) {
  console.log("hello world");
} else {
  console.log("n'a pas de class");
}
