import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const singleDrink = get(".single-drink");

const displayDrink = (data) => {
  // cache le chargement
  hideLoading();
  // affiche les infos d'un cocktail
  const drink = data.drinks[0];
  const { strDrinkThumb: img, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const image = get(".drink-img");
  const drinkName = get(".drink-name");
  const descp = get(".drink-description");
  const ingredients = get(".drink-ingredients");

  image.src = img;
  drinkName.textContent = name;
  descp.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return (
        <li>
          <i class="far fa-check-square"></i>${item}
        </li>
      );
    })
    .join("");
};

export default displayDrink;
