//*constructeur
// * Tous les objets en JS ont accès à la propiété "constructor" qui retourne la fonction constructeur qui les a créé;
//* intégré dans les fonctions constructeur
//* les arrays et fonctions sont des objets en JS

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `mon nom complet est ${this.firstName} ${this.lastName} et j'aime le js `
    );
  };
  // console.log(this);
}

const alex = new Person("alex", "hu");
console.log(alex.constructor);

const list = [];
// console.log(list.constructor);

const fonction = function () {};
// console.log(fonction.constructor);
