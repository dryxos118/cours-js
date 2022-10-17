// proprieter et methodes des chaines de caractére des strings

let txt = "Hello world";

const result = txt.length;
// console.log(result);

console.log(txt.toLowerCase()); // pour tout mettre en minuscule

console.log(txt.toLocaleUpperCase()); // pour tout mettre entre majuscule

//caractere a index specific

console.log(txt.charAt(1)); // montre le caracthére numero 1

console.log(txt.charAt(txt.length - 1)); // la longeur du texte

console.log(txt.at(-1)); // montre la dernire lettre

// console.log(txt.indexOf("a")); // cherche la lettre

// console.log(txt.trim()); // enleve espace avant

// console.log(txt.toLocaleLowerCase().startsWith("hello")); // montre si il y a hello

// console.log(txt.includes("llo")); // chercher les lettre

// console.log(txt.slice(0, 2)); // montre que les 2 premier ou si on change
