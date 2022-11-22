//* Fonctions fléchées
//* pas de nom, toujours une expression qu'on assigne à une variable
//* pas de mot-clef "function"
//* retour implicite
//* "this"

//function basic

// function sayHi() {
//   console.log("salut");
// }

// sayHi();

// const hello = function (name) {
//   console.log(`hey ${name}`);
// };

// hello("alex");

// function double(value) {
//   return value * 2;
// }

//* function arrow

const sayHi = () => {
  console.log("salut");
};

// sayHi();

const hello = (name) => console.log(`hey ${name}`);

// hello("alex");

const double = (value) => value * 2;

const num = double(5);
// console.log(num);
// console.log(double(2));

const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

const total = multiply(4, 6);
// console.log(total);

//retourne un objets

const objets = () => ({ name: "alex", age: 20 });

// console.log(objets());

const number = [1, 2, 3, 4, 5, 6];

const big = number.filter((num) => num > 2);

// console.log(big);

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => console.log("tu a cliquer sur moi"));
