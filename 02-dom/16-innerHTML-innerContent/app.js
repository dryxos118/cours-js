const list = document.getElementById("first");
const div = document.getElementById("second");
const listItem = document.querySelector(".item");

// console.log(div.textContent);
// console.log(list.textContent);
// console.log(listItem.textContent);
//return le html
// console.log(list.innerHTML);

const randomVar = "valeur au pif";

const ul = document.createElement("ul");

ul.innerHTML = `
<li class"item">${randomVar}</li>
<li>item</li>
<li>item</li>`;
document.body.appendChild(ul);

// div.textContent = `
// <li class"item">${randomVar}</li>
// <li>item</li>
// <li>item</li>`;

div.innerHTML = `
<li class"item">${randomVar}</li>
<li>item3</li>
<li>item4</li>`;
