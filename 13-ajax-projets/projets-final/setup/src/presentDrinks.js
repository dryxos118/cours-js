import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // récupère les cocktails
  const drinks = await fetchDrinks(url);

  // affiche les cocktails
  displayDrinks(drinks);
  setDrink(displayDrinks);
};

export default showDrinks;
