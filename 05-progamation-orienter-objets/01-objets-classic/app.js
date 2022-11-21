//* Les bases de l'Objet

//* Les objets sont une collection de paires de clef(propriété) et valeur
//* Les valeurs peuvent être des strings, numbers, booleans, arrrays et functions, dans ce cas on l'appelera une méthode

//* synthaxe d'un objet, {}

const person = {
  name: "alex",
  age: 20,
  married: true,
  siblings: ["max", "dom"],
  greet(name) {
    console.log(`salut mon nom est ${name}`);
  },
};

console.log(person);
person.greet(person.name);
const name = person.name;
console.log(name);

//* modifier
person.age = 50;
console.log(person);

//* crée
person.city = "herlies";
console.log(person);

//* supprimer

delete person.siblings;
console.log(person);
