//propriéter des tableaux

let names = ["john", "bobo", "barry", "olga", "ben", 2, 3, 4];

//longeurs
// console.log(names.length);
// console.log(names.at(-1));

//concat
const names1 = ["chat", "chien", "banane"];
const allnames = names.concat(names1);
// console.log(allnames);

//inverse

// console.log(allnames.reverse());

// unshift = ajoute debut du tableau
// allnames.unshift("nuts");
// console.log(allnames);

//on peut aussi suprimmer le premier element
// allnames.shift;
// console.log(allnames);

// ajouter a la fin du tableau

// allnames.push("lll");
// console.log(allnames);

//pop pour suprimer a la fin du tableau

// allnames.pop();
// console.log(allnames);

console.log(allnames);

//splice

const name = allnames.splice(2, 1);
console.log(name);
console.log(allnames);
