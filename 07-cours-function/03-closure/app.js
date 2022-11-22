//* Closure (fermeture)
//* donne accès au scope d'une fonction extérieure depuis l'intérieur d'une fonction
//* permet de faire des variables privées

function outer() {
  function inner() {
    console.log(`yop le secret est :`);
  }

  return inner;
}

outer();

const value = outer();
console.log(value);
value();
outer()();
