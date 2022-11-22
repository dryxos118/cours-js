//* Closure (fermeture)

function newAccount(name, initialBalance) {
  let balance = initialBalance;

  function showBalance() {
    console.log(`yo ${name}, ton solde est de ${balance}`);
  }

  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`hey ${name} tu a pas assez de thune`);
      return;
    }

    balance -= amount;
    showBalance();
  }

  return { showBalance, deposit, withdraw };
}

const alex = newAccount("alex", 500);
const dom = newAccount("dom", 300);

alex.showBalance();
alex.deposit(400);
alex.deposit(1000);
alex.withdraw(500);

dom.withdraw(400);
