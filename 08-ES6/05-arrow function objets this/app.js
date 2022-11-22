//* function fléchées

//* fonction régulière : "this" réfère le parent, à gauche du .

//* fonction fléchée : "this" réfère au scope l'entourant au moment de son exécution
//! ne pas utiliser de fléchée
// const bob = {
//   fisrtName: "bob",
//   lastName: "smith",
//   sayName: () => {
//     console.log(this);

//     setTimeout(() => {
//       console.log(this);
//       console.log(`hey mon nom est ${this.fisrtName} ${this.lastName}`);
//     }, 2000);
//   },
// };

//? ca marche

const bob = {
  fisrtName: "bob",
  lastName: "smith",
  sayName: function () {
    console.log(this);

    self = this;

    setTimeout(function () {
      console.log(self);
      console.log(`hey mon nom est ${self.fisrtName} ${self.lastName}`);
    }, 2000);
  },
};

// const bob = {
//   fisrtName: "bob",
//   lastName: "smith",
//   sayName: function () {
//     console.log(this);

//     setTimeout(() => {
//       console.log(this);
//       console.log(`hey mon nom est ${this.fisrtName} ${this.lastName}`);
//     }, 2000);
//   },
// };

bob.sayName();
