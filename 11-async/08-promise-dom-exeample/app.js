const btn = document.querySelector(".btn");
const t1 = document.querySelector(".one");
const t2 = document.querySelector(".two");
const t3 = document.querySelector(".three");

btn.addEventListener("click", () => {
  addColor(1000, t1, "red")
    .then(() => addColor(2000, t2, "green"))
    .then(() => addColor(1000, t3, "blue"))
    .catch((err) => console.log(err));
});

const addColor = (time, el, color) => {
  return new Promise((resolve, rejet) => {
    if (el) {
      setTimeout(() => {
        el.style.color = color;
        resolve();
      }, time);
    } else {
      rejet(new Error(`il y a un probleme sur ${el}`));
    }
  });
};
