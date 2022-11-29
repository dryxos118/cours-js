import get from "./utils/getElement.js";
import displayUser from "./utils/displayUser.js";
import fetchUser from "./utils/fetchUser.js";

const randomUser = get(".btn");

const showUser = async () => {
  // récupére l'utilisateur depuis l'api
  const person = await fetchUser();
  console.log(person);
  // affiche l'utilisateur
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);

randomUser.addEventListener("click", showUser);
