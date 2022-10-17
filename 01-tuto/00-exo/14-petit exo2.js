//* 1 - Hello World
function displayMessage() {
  return "Hello World";
}

// console.log(displayMessage());

//* 2 - Le carré d'un nombre
const findSquare = function (num) {
  // return num * num;
  // return Math.pow(num, 2);
  // return num ** 2;
  return num ** 2;
};

// console.log(findSquare(2));
// console.log(findSquare(12));

//* 3 - L'aire d'un rectangle
// function rectangleArea(length, width) {
//   return length * width;
// }

// const rectangleArea = function (length, width) {
//   return length * width;
// };

const rectangleArea = (length, width) => length * width;

// console.log(rectangleArea(5, 8));

//* 4 - Le périmètre et l'aire d'un cercle
function circleValues(radius) {
  return `Le périmètre du cercle est : ${(2 * Math.PI * radius).toFixed(
    2
  )} et l'aire est : ${(Math.PI * radius ** 2).toFixed(2)}`;
}

// console.log(circleValues(2.5));

//* 5 - Le nombre de voyelles
const vowels = ["a", "e", "i", "o", "u", "y"];

const countVowel = function (string) {
  return string
    .toLowerCase()
    .split("")
    .reduce(function (total, char) {
      if (vowels.includes(char)) {
        if (total[char]) {
          total[char] += 1;
        } else {
          total[char] = 1;
        }
      }

      return total;
    }, {});
};

// console.log(countVowel('le chiEn est moche'));

//* 6 - Nombre aléatoire
const genRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// console.log(genRandom(10, 20));
