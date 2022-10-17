// tableau & boucle for

const names = ["alex", "max", "dom"];
const lastname = "hu";
let newarray = [];

for (let i = 0; i < names.length; i++) {
  newarray.push(names[i] + " " + lastname);
}
console.log(newarray);
