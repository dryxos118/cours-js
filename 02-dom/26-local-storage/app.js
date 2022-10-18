//* web storage API fournit par le navigateur
//* session storage local storage
//* setItem getItem removeItem clear

//?definir une clef
localStorage.setItem("name", "alex");
localStorage.setItem("name", "dom");
localStorage.setItem("job", "developper");
localStorage.setItem("age", "53");

//?acceder a une clef

const name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");

localStorage.clear();
