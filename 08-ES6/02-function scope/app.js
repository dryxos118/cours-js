//* var, let, const
//* let,const - scope de bloc {} - tout ce qui est dans les {}
//* var - scope de la fonction

//* scope global

// console.log(amount);
var amount = 100;

function greet() {
  //*scope local
  var random = "une valeur au pif";
  console.log(`hey hey ${amount} ${random}`);
}

greet();

//!erreur
// console.log(random);

let total = 1000;
let test = true;
if (test) {
  let total = "oranges";
  let value = "valeur au pif";
  console.log("salut salut");
}
