//declaration basique

// function calculate(subtotal, taxt) {
//   return subtotal + taxt;
// }

//expression de fonction

// const calculate = function{
//     return subtotal + taxt;
// }

//fonction fléchée

const calculate = (subtotal, taxt) => subtotal + taxt;

const order1 = calculate(10, 2);
const order2 = calculate(20, 2);
const order3 = calculate(30, 2);

console.log(order1, order2, order3);
