// les objets
//objets paires clef valeur méthodes

const person = {
  name: "alex",
  lastname: "hu",
  age: "19",
  married: false,
  siblings: ["maxence", "max"],

  greeting: function () {
    console.log("salut ! je suis alexis");
  },
};

console.log(person.name);
console.log(person.age);
person.greeting();
