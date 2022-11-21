//* blue print
//*fabrique(factorie function)et constructor(constructore function)

//* fabrique

// const alex = {
//   firstName: "alex",
//   lastName: "hu",
//   fullName() {
//     console.log(this);
//     console.log(
//       `mon nom complet est ${this.firstName} ${this.lastName} et j'aime le js`
//     );
//   },
// };

// const dom = {
//   firstName: "dom",
//   lastName: "hu",
//   fullName() {
//     console.log(this);
//     console.log(
//       `mon nom complet est ${this.firstName} ${this.lastName} et j'aime le js `
//     );
//   },
// };

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName() {
      console.log(
        `mon nom complet est ${this.firstName} ${this.lastName} et j'aime le js `
      );
    },
  };
}

const alex = createPerson("alex", "hu");
alex.fullName();

const dom = createPerson("dom", "hu");
dom.fullName();
