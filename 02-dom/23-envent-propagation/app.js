//* La propagation d'event permet une sélection des éléments dynamiques (par exemple créés avec JS)

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

//*event bubbling-le premier element clique puis romnte par deffaut

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  console.log("target", e.target);

  if (e.target.classList.contains("link")) {
    console.log("tu a cliquer sur le lien ");
  }
}

// list.addEventListener("click", showBubbling);
// container.addEventListener("click", showBubbling);
// document.addEventListener("click", showBubbling);
// window.addEventListener("click", showBubbling);

//*propagation des evenement-l'ordre dans la quel il sont utiliser

function stop(e) {
  console.log("tu a clique sur la liste");
  e.stopPropagation();
}

//*event captutring se declenche depuis la racine jusqu'a atteindre la cible

list.addEventListener("click", showBubbling, { capture: true });
container.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });
