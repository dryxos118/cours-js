import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseUrl = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

// écoute le formulaire et affiche les cocktails

const form = get(".search-form");
const input = get("#drink");

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseUrl}${value}`);
});
