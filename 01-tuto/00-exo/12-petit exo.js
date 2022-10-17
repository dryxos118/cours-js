//* exo reverseString
// const reverseString = "dracula";
// let splitString = reverseString.split("");
// let reversString = splitString.reverse();
// let joinString = reversString.join("");

// console.log(joinString);

// const reverseString = (string) => string.split("").reverse().join("");

// console.log(reverseString("dracula"));
// console.log(reverseString("coucou"));
// console.log(reverseString(" "));

//* exo removeFromArray

// function removeFromArray(arr, remove) {
//   return arr.filter(function (item) {
//     return item !== remove;
//     item !== remove;
//     return item;
//   });
// }

// console.log(removeFromArray([1, 2, 3, 4], 3));
// console.log(removeFromArray([1, 2, 3, 0, 4], 3));

//*exo sumTotal

// function sumAll(start, end) {
//   let sum = 0;
//   if (
//     start < 0 ||
//     end < 0 ||
//     typeof start !== "number" ||
//     typeof end !== "number"
//   ) {
//     return "erreur";
//   } else if (end > start) {
//     for (let i = start; i <= end; i++) {
//       sum += i;
//     }
//   } else {
//     for (let j = end; j <= start; j++) {
//       sum += j;
//     }
//   }
//   return sum;
// }

// console.log(sumAll(1, 4));
// console.log(sumAll(123, 1));
// console.log(sumAll(-10, 4));
// console.log(sumAll(1, "4"));
// console.log(sumAll(1, [1, 4]));
// console.log(typeof 10);

//* temperature de F a °C

// function ftoc(fa) {
//   return +(((fa - 32) * 5) / 9).toFixed(1);
// }
// console.log(ftoc(32));
// console.log(ftoc(100));
// console.log(ftoc(-100));

// function ctof(c) {
//   return +((c * 9) / 5 + 32).toFixed(1);
// }
// console.log(ctof(0));
// console.log(ctof(73.2));
// console.log(ctof(-10));

//*exo 5 la calculatrice

function calcu(num1, acc, num2) {
  let sum = 0;
  if (acc === "+") {
    return (sum = num1 + num2);
  }
  if (acc === "-") {
    return (sum = num1 - num2);
  }
  if (acc === "*") {
    return (sum = num1 * num2);
  }
  if ((acc === "/" && num1 === 0) || num2 === 0) {
    return "erreur";
  }
  if (acc === "/") {
    return (sum = num1 / num2);
  }
}

// console.log(calcu(1, "+", 2));
// console.log(calcu(2, "-", 1));
// console.log(calcu(2, "*", 2));
// console.log(calcu(4, "/", 2));
// console.log(calcu(4, "/", 0));

//*exos 6 chercher les tittre des livres

const books = [
  {
    title: "harry potter",
    author: "Nom",
  },
  {
    title: "l'enfant maudit",
    author: "Nom2",
  },
];

function getTheTitle(books) {
  return books.map(function (book) {
    return book.title;
  });
}
// console.log(getTheTitle(books));

//*exo 7 le plus vieux

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    // yearOfDeath: 2000,
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
    if (person.yearOfDeath === undefined) {
      age = new Date().getFullYear() - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }

    if (oldestAge < age) {
      oldestAge = age;
      //   oldestPerson = Object.assign({}, person);
      oldestPerson = { ...person };
    }
  });
  return oldestPerson;
}

console.log(findTheOldest(people));
