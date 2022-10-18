//* l'event load s'éxéute quand toute la page a été chargée, en incluant toutes les dépendances comme les feuilles de styles et les images. C'est en contraste avec DOMContentLoaded qui s'éxécute dès que la page DOM a été chargée, sans attendre le chargement des ressources

//* window.addEventListener('load', function () {
//*   // le code
//* });

window.addEventListener("load", function () {
  console.log("je vais etre utiliser en second");
  const img = this.document.querySelector("img");
  console.log(img);
  console.log(img.width);
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("je vais etre utiliser en premier ");
  const img = this.document.querySelector("img");
  console.log(img);
  console.log(img.width);
});
