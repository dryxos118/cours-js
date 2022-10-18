//* setTimeout - exécute la fonction après un temps spécifique

//* - passe la référence à la fonction
//* - durée en ms (1000ms = 1 seconde)
//* - par défaut 0, on verra plus en détail dans la partie async/await
//* - retourne un identifiant unique
//* - clearTimeout pour annuler
//* - sur l'objet window

function sayHello() {
  console.log("hello alex");
}
// setTimeout(sayHello, 1000);

//* passer des arguments apres la durée
function showScore(name, score) {
  console.log(`bonjour ${name} ton score est de ${score}`);
}

const firsId = setTimeout(showScore, 1000, "alex", 88);
const secondId = setTimeout(showScore, 1000, "dom", 88);

console.log(firsId);
console.log(secondId);

//*on execute pas le premier timeout
clearTimeout(firsId);

//*on peut l'utiliser mais pas utiliser
// window.setTimeout(function () {

// },1000)
