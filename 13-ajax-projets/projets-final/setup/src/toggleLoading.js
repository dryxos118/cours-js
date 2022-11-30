import get from "./getElement.js";

const pacMan = get(".loading");

// montre le loader
export const showLoading = () => {
  pacMan.classList.remove("hide-loading");
};

// cache le loader
export const hideLoading = () => {
  pacMan.classList.add("hide-loading");
};
