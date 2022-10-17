//! reduce
//* réduit l'array à une simple valeur - nombre, array, objet
//* itère aussi avec une fonction callback
//* 1er paramètre ('acc') - total de tous les calculs
//* 2ème paramètre ('curr') - itération/valeur actuelle

const people = [
  { name: "bob", score: 20, job: "developpeur", id: 1, salary: 200 },
  { name: "peter", score: 25, job: "designer", id: 2, salary: 30 },
  { name: "susy", score: 30, job: "la boss", id: 3, salary: 500 },
  { name: "anna", score: 35, job: "la boss", id: 4, salary: 500 },
];

const total = people.reduce(function (sum, person) {
  console.log(`somme${sum}`);
  console.log(person);
  sum += person.salary;
  return sum;
}, 0);

console.log(total);
