//*createElement("element")
//*createTextNode
//*element.appendchild

const result = document.querySelector("#result");

//cree un element vide
const bodyDiv = document.createElement("div");

//cree un noeud de texte
const text = document.createTextNode("une simple div de body");

//ajoute notre noeud texte
bodyDiv.appendChild(text);

//ajoute notre element dans body en tant que dernier enfant
// document.body.appendChild(bodyDiv);

const heading = document.createElement("h2");
const headingText = document.createTextNode("titre dynamique");
heading.appendChild(headingText);
heading.classList.add("blue");
// result.appendChild(heading);

//*insertBefore("element","location")
//insert avant la location
document.body.insertBefore(bodyDiv, result);

const first = document.querySelector(".red");
result.insertBefore(heading, first);

//*replaceChild("new","old")

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode("je suis un small texte");
smallHeading.appendChild(smallText);
smallHeading.classList.add("red");

document.body.replaceChild(smallHeading, bodyDiv);
