const student = [
  { name: "nath", score: 50, id: 1, favoriteSubject: "math" },
  { name: "max", score: 35, id: 2, favoriteSubject: "musique" },
  { name: "dom", score: 99, id: 3, favoriteSubject: "math" },
  { name: "alex", score: 89, id: 4, favoriteSubject: "histoire" },
  { name: "nuts", score: 70, id: 5, favoriteSubject: "musique" },
];

const updatedStudents = student.map(function (person) {
  person.role = "student";
  return person;
});
console.log(updatedStudents);

const highScores = student.filter(function (person) {
  return person.score > 80;
});
console.log(highScores);

const specificId = student.find(function (person) {
  return person.id === 5;
});
console.log(specificId);

const averagescore =
  student.reduce(function (total, person) {
    // console.log(`somme ${total}`);
    // console.log(person);
    total += person.score;
    return total;
  }, 0) / student.length;
console.log(averagescore);

//! cours notation crochets (square bracket notation)

// const subjet = "math";
// const total = {};

// total[subjet] = "valeur au pif";

// console.log(total);

const favSubject = student.reduce(function (acc, student) {
  // console.log(student);
  const fav = student.favoriteSubject;

  if (acc[fav]) {
    // console.log(acc, fav, "ca existe");
    acc[fav] += 1;
  } else {
    // console.log(acc, fav, "existe pas");
    acc[fav] = 1;
  }

  return acc;
}, {});

console.log(favSubject);
