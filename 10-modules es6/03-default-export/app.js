import { random } from "./utils/data.js";

import showPeople from "./utils/show.js";

console.log(random);

import { people } from "./utils/data.js";

const div = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  div.innerHTML = showPeople(people);
});
