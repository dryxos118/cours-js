import { random } from "./utils/data.js";

console.log(random);

import { people } from "./utils/data.js";

const div = document.querySelector(".container");
const btn = document.querySelector(".btn");

const showPeople = () => {
  const nexPeople = people.map((person) => {
    const { name, job } = person;

    return `<p/>${name} <strong>${job}</strong></p>`;
  });
  div.innerHTML = nexPeople.join("");
};

btn.addEventListener("click", showPeople);
