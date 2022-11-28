//* Déstructuration
//* plus rapide/facile pour accéder/extraire les valeurs d'un tableau

const fruits = ["orange", "banane", "citron"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

//ancienne fonction

const orange = fruits[0];
const banane = fruits[1];
const lemon = fruits[2];

//destructuration

const [john, peter, bob] = friends;

const [, , , , kelly] = friends;
console.log(kelly);
