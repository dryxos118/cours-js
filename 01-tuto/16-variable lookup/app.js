//*recherche d'une variable
//!{} - bloc de code

const global = 5;

function add(num1, num2) {
  const global = 20;
  const result = num1 + num2 + global;

  function multiply() {
    const global = 100;
    const mul = result * global;
    console.log(mul);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
