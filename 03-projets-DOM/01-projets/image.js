const colors = [
  "url(https://static.cnews.fr/sites/default/files/cyberpunk_2077_-_10_oeuvres_visionnaires_a_connaitre_avant_la_sortie_du_jeu_5fc76b840fd70_0.jpg)",
  "url(https://th.bing.com/th/id/OIP.i1sGEvM_eOCL3CW7q0q6IAHaJ4?pid=ImgDet&rs=1)",
];

const color = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber("");
  document.body.style.backgroundImage = colors[randomNumber];
  // color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
