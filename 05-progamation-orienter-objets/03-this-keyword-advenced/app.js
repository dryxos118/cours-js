//* Dans les fonctions régulières (pas les fléchées), "this" est déterminé par "COMMENT" une fonction est invoquée (à gauche du .)

//* par défaut l'objet global - window
//*  fonctions fléchées - on verra quand on fera l'ES6

function showThis() {
  console.log(this);
}

const alex = {
  name: "alex",
  showThis: showThis,
};

const dom = {
  name: "alex",
  showThis,
};

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", () => {
  showThis();
});
