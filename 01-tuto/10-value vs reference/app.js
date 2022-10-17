//* Référence vs Valeur

//* Type de données primitif
//* String, Number, Symbol, Boolean, Undefined, Null

//* Type de données non-primitif
//* Arrays, Functions, Objects = object
//? typeof

//* Quand on assigne un type de donnée primitif à une variable. Tous les changements sont faits directement sur la valeur sans affecter la valeur originale.

//* Quand on assigne un type de donnée non-primitif à une variable, c'est fait par référence donc n'importe quel changement va affecter les références

//la base

const number = 1;
let number2 = number;
number2 = 7;
console.log(`le 1ere valeur est ;${number}`);
console.log(`le 2eme valeur est ;${number2}`);

const person = { name: "bob" };
const person2 = person;
person2.name = "alex";

console.log(person);
console.log(person2);
