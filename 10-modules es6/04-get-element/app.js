import { random } from "./utils/data.js";

import showPeople from "./utils/show.js";

console.log(random);

import { people } from "./utils/data.js";

import getElement from "./utils/getElement.js";

const div = document.querySelector(".container");
const btn = getElement(".btn");

btn.addEventListener("click", () => {
  div.innerHTML = showPeople(people);
});
