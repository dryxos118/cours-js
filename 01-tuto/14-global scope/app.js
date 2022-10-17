//todo: Global Scope vs Local Scope
//* toute variable en-dehors du bloc de code {} est dite dans le Scope Globale
//* elle peut être accessible n'importe où dans le programme
//! pièges : collisions de noms, peut être modifiée par erreur

let name = "bobo";
name = "peter";

function calculate() {
  console.log(name);
  name = "orage";
  console.log(name);

  function inner() {
    name = "valeur de name a l'interieur";
    console.log(`c'est depuis la fonction inner ${name}`);
  }

  inner();
}
// calculate();
