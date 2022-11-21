//* objets imbriqués
//* definie une variable ne tant que proprieter

const person = {
  name: "alex",
  age: 20,
  married: true,
  siblings: ["max", "dom"],
  greet(name) {
    console.log(`salut mon nom est ${name}`);
  },
  job: {
    title: "etudiant",
    company: {
      name: "forEach academy",
      address: "lille",
    },
  },
};

// console.log(person.job.company.address);

//* notation . vs notation []

console.log(person["name"]);

let random = "age";
console.log(person[random]);
