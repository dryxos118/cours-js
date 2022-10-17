//* function reverseString(string) {
//*   return string.split('').reverse().join('');
// }

const reverseString = (string) => string.split("").reverse().join("");

console.log(reverseString("salut toi")); // retourne 'iot tulas'
console.log(reverseString("123! abc!")); // retourne '!cba !321'
console.log(reverseString("")); // retourne ''

//*Exo 2 - Suprimmer un élément d'un tableau:
function removeFromArray(arr, remove) {
  return arr.filter(function (item) {
    // return item !== remove;

    if (item !== remove) {
      return true;
    }
  });
}

console.log(removeFromArray([1, 2, 3, 4], 3)); // doit supprimer 3 et retourner [1,2,4]
console.log(removeFromArray([1, 2, 3, 4], "tacos")); // retourne [1, 2, 3, 4]
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey")); // retourne[2, 3,'ho']
console.log(removeFromArray([2, 4, 6, 0, 9], 6));

//*Exo 3 - Faire la somme
function sumAll(start, end) {
  if (
    start < 0 ||
    end < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    return "ERREUR";
  }

  let sum = 0;

  if (start > end) {
    [start, end] = [end, start];
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll(1, 5));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

//*exo 4 Convertion de températures

function ftoc(fa) {
  return +(((fa - 32) * 5) / 9).toFixed(1);
}
console.log(ftoc(32));
console.log(ftoc(100));
console.log(ftoc(-100));

function ctof(c) {
  return +((c * 9) / 5 + 32).toFixed(1);
}
console.log(ctof(0));
console.log(ctof(73.2));
console.log(ctof(-10));

//* exo 5  calculatrice

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function sumAll(arr) {
  return arr.reduce(function (total, num) {
    return total + num;
  }, 0);
}

function multiplyAll(arr) {
  return arr.reduce(function (total, num) {
    return total * num;
  }, 1);
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "Impossible de diviser par 0";

  return num1 / num2;
}

function power(num1, num2) {
  // return Math.pow(num1,num2);
  return num1 ** num2;
}

function factorial(n) {
  if (n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function calculate(num1, num2, operator) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return substract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
  if (operator === "**") return power(num1, num2);
  if (operator === "!") return factorial(num1);

  return "Veuillez saisir un opérateur valide";
}

// console.log(calculate(0, 0, '+'));
// console.log(calculate(2, 2, '+'));
// console.log(calculate(2, 6, '+'));

// console.log(calculate(10, 4, '-'));

// console.log(calculate(2, 4, '*'));
// console.log(calculate(4, 0, '*'));

// console.log(calculate(4, 0, '/'));
// console.log(calculate(1, 12, '/'));
// console.log(calculate(20, 7, '/'));
// console.log(calculate(-33, 3, '/'));

// console.log(calculate(4, null, '!'));
// console.log(calculate(12, null, '!'));

// console.log(sumAll([]));
// console.log(sumAll([7]));
// console.log(sumAll([7, 11]));
// console.log(sumAll([1, 3, 5, 7, 9]));

// console.log(multiplyAll([2, 4]));
// console.log(multiplyAll([2, 4, 6, 8, 10, 12, 14]));

//*chercher les titre

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

function getTitles(books) {
  return books.map(function (book) {
    return book.title;
  });
}

// console.log(getTitles(books));

//*Ex - Trouver la personne la plus âgée:

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    // yearOfDeath: 1970
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

function findTheOldest(people) {
  let oldestAge = 0;
  let oldestPerson = {};

  people.forEach(function (person) {
    const age = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth;

    if (oldestAge < age) {
      oldestAge = age;
      // oldestPerson = Object.assign({}, person);
      oldestPerson = { ...person };
    }
  });

  return oldestPerson;
}

// const oldestPerson = findTheOldest(people);
// console.log(oldestPerson.name);
