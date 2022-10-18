//* l'event DOMContentLoaded s'éxécute quand le document HTML initial a té complétement chargé et analysé, sans attendre que les feuilles de style, les images ont finis de charger

//* window.addEventListener('DOMContenLoaded', function() {
//*   //  code
//* })

// alternative
//* document.addEventListener...

window.addEventListener("DOMContentLoaded", function () {
  const heading = this.document.querySelector("h1");
  console.log(heading);
  heading.style.color = "red";
});
