import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
  // montre le chargement
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
  // récupère les cocktails
};

export default fetchDrinks;
