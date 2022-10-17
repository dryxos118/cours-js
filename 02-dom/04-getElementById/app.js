//* Sélectionne l'élément ou groupe d'éléments que l'on veut modifier
//* Décide l'effet que l'on veut appliquer à la sélection

//!si on trouve rien on aura null et le programe plante

const h1 = document.getElementById("title");
h1.style.color = "red";

// document.getElementById("btn").style.backgroundColor = "blue";
// document.getElementById("btn").style.color = "white";
//!ou on peut faire avec un const

const btn = document.getElementById("btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";
