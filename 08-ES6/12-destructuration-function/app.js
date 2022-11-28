//* destructuration d'objets

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// function printPerson(person) {
//   const { first, last, city } = person;
//   console.log(first, last, city);
// }

function printPerson({ first, last, city }) {
  console.log(first, last, city);
}

printPerson(bob);
