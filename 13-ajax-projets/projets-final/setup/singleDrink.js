import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  // récupère les infos du cocktail
  // affiche les infos du cocktail
  const id = localStorage.getItem("drinkStorage");

  const presentDrink = async () => {
    // récupère les infos du cocktail
    if (!id) {
      window.location.replace("./index.html");
    } else {
      const recup = await fetchDrinks(`${url}${id}`);
      displayDrink(recup);
    }
    // affiche les infos du cocktail
  };

  window.addEventListener("DOMContentLoaded", () => {
    presentDrink(url);
  });
};
