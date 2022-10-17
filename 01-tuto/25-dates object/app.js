//* Objet Date

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

//!on peut choisir la date (mois/jour/année)
const date = new Date();
// console.log(date);

const month = date.getMonth();
// console.log(months[month]);

const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());

// console.log(date.getFullYear());

const sentence = `${days[day]},${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = `<p>${sentence}</p>`;
