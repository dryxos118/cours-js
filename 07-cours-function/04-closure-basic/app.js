//* Closure (fermeture)

function newAccount(name, initialBalance) {
  function showBalance() {
    console.log(`yo ${name}, ton solde est de ${initialBalance}`);
  }
  return showBalance;
}

newAccount("alex", 1000)();

const dom = newAccount("dom", 500);
const max = newAccount("max", 10);

// valeur des paramétre
dom();
max();
