import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const sectionCenter = get(".section-center");
const error = get(".title");

const displayDrinks = async ({ drinks }) => {
  // cache les chargement
  console.log(drinks);
  if (drinks === null) {
    hideLoading();
    error.textContent = "sorry, no drinks matched your search";
    sectionCenter.innerHTML = "";
  } else {
    // affiche les cocktails
    const showDrinks = drinks
      .map((e) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: img } = e;
        return `<a href="#"
    <article class="cocktail" data-id="${id}">
    <img src="${img}" alt="${name}"/>
    <h3>${name}</h3>
    </aticle>
    </a>`;
      })
      .join("");

    error.textContent = "";
    sectionCenter.innerHTML = showDrinks;
    hideLoading();
  }
  return sectionCenter;
};

export default displayDrinks;
