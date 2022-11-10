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

const giveaway = document.querySelector(".giveaway");

// console.log(giveaway);

// future date

let futurDate = new Date();
let futureYears = futurDate.getFullYear();
let futureMonths = futurDate.getMonth();
let futureDays = futurDate.getDate();

// console.log(futureDays);
// console.log(futureMonths);
// console.log(futureYears);

const futureDate = new Date(
  futureYears,
  futureMonths,
  futureDays + 10,
  9,
  30,
  0
);

// console.log(futureDate);

const Fyears = futureDate.getFullYear();
const Fdates = futureDate.getDate();
const Fhours = futureDate.getHours();
const Fmonth = months[futureDate.getMonth()];
const Fmins = futureDate.getMinutes();
const Fjours = days[futureDate.getDay()];

giveaway.textContent = `l'offre se termine le ${Fjours} ${Fdates} ${Fmonth} ${Fyears} 0${Fhours}h${Fmins}`;

// compte a rebours

const deadline = document.querySelector(".deadline");
const format = document.querySelectorAll(".deadline-format h4");

console.log(deadline);
console.log(format);

const timeF = futureDate.getTime();

// console.log(timeF);

function timeRemaining() {
  const today = new Date().getTime();
  const t = timeF - today;

  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minMs = 60 * 1000;

  let day = t / dayMs;
  day = Math.floor(day);
  let hour = (t % dayMs) / hourMs;
  hour = Math.floor(hour);
  let min = (t % hourMs) / minMs;
  min = Math.floor(min);
  let sec = (t % minMs) / 1000;
  sec = Math.floor(sec);

  const values = [day, hour, min, sec];

  // console.log(values);

  function compte(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  format.forEach(function (item, value) {
    item.innerHTML = compte(values[value]);
  });

  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4>desolé tu est arriver trop tard</h4>`;
  }
}

let countDown = setInterval(timeRemaining, 1000);

timeRemaining();
