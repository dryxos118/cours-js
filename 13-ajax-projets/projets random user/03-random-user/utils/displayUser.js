import get from "./getElement.js";
import removeActive from "./removeActive.js";

// affiche les infos de l'utilisateur

const userImg = get(".user-img");
const userTitle = get(".user-title");
const userValue = get(".user-value");
const userInfo = [...document.querySelectorAll(".icon")];

console.log(userInfo);

const displayUser = (person) => {
  const { image, name, age, email, phone, password } = person;
  userImg.src = image;
  userTitle.textContent = `My name is`;
  userValue.textContent = name;

  userInfo.forEach((btns) => {
    const label = btns.dataset.label;

    btns.addEventListener("click", () => {
      console.log(label);
      userTitle.textContent = `My ${label} is`;
      userValue.textContent = person[label];
      removeActive(userInfo);
      btns.classList.add("active");
    });
  });
};

export default displayUser;
