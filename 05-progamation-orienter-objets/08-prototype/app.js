//* L'héritage de prototype (prototypal inheritance model)
//* Le JS utilise l'héritage de prototype. Cela signifie que toutes les fonctions/classes constructeurs ont une propriété qui est partagée par chaque instance du constructeur/classe. Donc chaque propriétés et méthodes, ou prototype est accessible par chaque instance. La prop "prototype" retourne un objet

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;

  // this.deposit = function (amount) {
  //   this.balance += amount;
  //   console.log(`bonjour ${this.name}, votre solde est de ${this.balance}`);
  // };
}

Account.prototype.bank = "LCL";

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`bonjour ${this.name}, votre solde est de ${this.balance}`);
};

const alex = new Account("alex", 200);
const max = new Account("max", 0);

// console.log(alex);
// console.log(max);

console.log(Account.prototype);

console.log(alex);
console.log(max);

// console.log(alex.bank);
// console.log(max.bank);

alex.deposit(300);
max.deposit(300);
