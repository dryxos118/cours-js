//* filter
//* retourne un nouvel array
//* peut manipuler la taille d'un array
//* retours basés sur la condition

const people = [
  { name: "bob", age: 20, job: "développeur" },
  { name: "peter", age: 25, job: "designer" },
  { name: "susy", age: 30, job: "la boss" },
  { name: "anna", age: 35, job: "la boss" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});
// console.log(youngPeople);

const developers = people.filter(function (person) {
  return person.job === "développeur";
});
console.log(developers);
