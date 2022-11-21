//* class ES6 - du sucre syntaxique
//* heritage du prototype

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  bank = "caisse d'épargne";

  deposit(amount) {
    this.balance += amount;
    console.log(`bonjour ${this.name}, votre solde est de ${this.balance}`);
  }
}

const alex = new Account("alex", 1000);

console.log(alex);
alex.deposit(500);
console.log(alex.bank);
