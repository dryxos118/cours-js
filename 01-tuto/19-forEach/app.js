//*forEach
//*ne retourne pas un nouveau tableau

const people = [
  { name: "bob", age: 20, job: "developpeur" },
  { name: "peter", age: 25, job: "designer" },
  { name: "susy", age: 30, job: "la boss" },
];

function showPerson(person) {
  console.log(person.job.toUpperCase());
}

people.forEach(function (item) {
  // console.log(item);
  console.log(item.job.toUpperCase());
});
