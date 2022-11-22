//* IIFE Immediately-Invoked Function Expression
//* c'est une ancienne approche - maintenant on utilise les Modules
//* une approche simple pour éviter la pollution du scope globale
//* une bonne façon de protéger le scope de la fonction and les variables à l'intérieur

const num1 = 30;
const num2 = 50;

function add() {
  console.log(`les resultat est de ${num1 + num2}`);
}

// add();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`les resultat est de ${num3 + num4}`);
})(); //on appel la funtion avec les paranthése a la fin

//* on a pas accés au num de la fonction

(function (num1, num2) {
  console.log(`les resultat est de ${num1 + num2}`);
})(500, 900);

const result = (function (num1, num2) {
  console.log(`les resultat est de ${num1 + num2}`);
  return num1 + num2;
})(500, 900);

console.log("result :", result);
