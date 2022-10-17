//fonction 1
// function sum(sum1, sum2) {
//   return sum1 + sum2;
// }

// console.log(sum(10, 10));

//2

// function sumelts(tab) {
//   let sum = 0;

//   //   for (let i = 0; i < tab.length; i++) {
//   //     sum += tab[i];
//   //     }
//   let i = 0;
//   while (i < tab.length) {
//     sum += tab[i];
//     i++;
//   }
//   return sum;
// }
// console.log(sumelts([1, 2, 3, 4]));

//3

// function vect(size, element) {
//   let tab = [];
//   let i = 0;

//   while (i < size) {
//     tab.push(element);
//     i++;
//   }
//   return tab;
// }

// console.log(vect(3, "kiri"));

//4

// function scalprod(scal, tab) {
//   let i = 0;

//   while (i < tab.length) {
//     tab[i] *= scal;
//     i++;
//   }
//   return tab;
// }

// console.log(scalprod(10, [1, 3, 5]));

//6

// function schtroupf(tab1, tab2) {
//   let sum = 0;

//   for (let i = 0; i < tab1.length; i++) {
//     for (let j = 0; j < tab2.length; j++) {
//       sum += tab1[i] * tab2[j];
//     }
//   }
//   return sum;
// }
// console.log(schtroupf([4, 8, 7, 12], [3, 6]));

//7

// function integer(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(integer(4));

//version plus rapide

// function integer(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(integer(4));

//avec recursion encore plus rapide

function integerRec(n) {
  if (n <= 0) {
    return 0;
  }
  return n + integerRec(n - 1);
}
console.log(integerRec(4));
