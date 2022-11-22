//* Hoisting (levage)
//* les déclarions de fonction et de var sont "levées"
//* plus sécure d'y accéder après qu'elles soient initialisées
// display();

function display() {
  console.log("hello");
}

// console.log(random);
// console.log(firstName);
// console.log(lastName);

const firstName = "alex";
var random = "au pif";
let lastName = "hu";
moreComplex();

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}
