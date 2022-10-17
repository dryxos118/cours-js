//* remove()

const result = document.querySelector("#result");

//supprime un element
// result.remove();

//*removeChild()

const heading = result.querySelector("h1");
console.log(heading);
//supprime l'enfant
result.removeChild(heading);
