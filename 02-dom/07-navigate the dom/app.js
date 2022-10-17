//* childNodes - retourne tous les noeuds enfants incluant les espaces qui sont traités comme un noeud texte

//* children
//* firstChild
//* lastChild

const result = document.querySelector("#result");

const allChildren = result.childNodes;
console.log(allChildren);

//!plus utiliser celle la
const children = result.children;
// console.log(children);
// console.log(children[1]);

console.log(result.firstChild);
console.log(result.lastChild);
