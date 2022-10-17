//* find
//* retourne une instance - (dans le cas de people, un objet, dans celui de names un string)
//* retourne le premier match, si pas de match retourne undefined
//* super pour chercher une valeur unique mais pas pratique si il y en a plusieurs

const people = [
  { name: "bob", age: 20, job: "developpeur", id: 1 },
  { name: "peter", age: 25, job: "designer", id: 2 },
  { name: "susy", age: 30, job: "la boss", id: 3 },
  { name: "anna", age: 35, job: "la boss", id: 4 },
];

const person = people.find(function (person) {
  return person.id === 3;
});
// console.log(person);

const person1 = people.find(function (person) {
  return person.id === 5;
});

// console.log(person1);

const name = ["dom", "alex", "alexis"];

console.log(
  name.find(function (item) {
    return item === "dom";
  })
);
