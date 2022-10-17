// tableau & boucle for

// essence
const gas = [20, 40, 100, 30];

//nouriture
const food = [10, 40, 50];

function totalprice(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
const gastotal = totalprice(gas);
const foodtotal = totalprice(food);

console.log(gastotal);
console.log(foodtotal);

console.log({
  gas: gastotal,
  food: foodtotal,
});
