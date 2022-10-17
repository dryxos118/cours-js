//les fontion expression
//declaration et definition d'une fonction

function addvalues(num1, num2) {
  return num1 + num2;
}

const firstvalue = addvalues(3, 4);
const secondvalue = addvalues(12 + 34);

// console.log(firstvalue, secondvalue);

//expression d'une fonction
const add = function (num1, num2) {
  return num1 + num2;
};

const thirdvalue = add(5, 6);

const values = [firstvalue, thirdvalue, add(5, 6)];
//console.log(thirdvalue);

//fonction fléche

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(54, 3));
