// les fontion return
// par defaut une fonction retourne undefined
function calcul(value) {
  const newvalue = value * 2.54;
  return newvalue;
  console.log("hello"); //derrire le return annuler
}

const width = calcul(80);
const height = calcul(0);

const dimension = [width, height];

console.log(dimension);

// on peut aussi rajouter des variables
