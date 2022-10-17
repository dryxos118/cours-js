//* Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
//? On doit apprendre ce concept avant de passer aux méthodes sur les tableaux

//* Les fonctions sont des objets de première classe - on peut donc les stocker dans une variable (expression), les passer en tant qu'argument dans une autre fonction, ou les retourner d'une autre fonction (closure)
//? la closure (fermeture) est concept avancé qu'on verra plus tard

//* Higher Order function - accèpte une autre fonction en tant qu'argument ou retourne une fonction en tant que résultat (closure)

//* Callback Function - passé à une autre fonction en tant qu'argument à l'intérieur de cette fonction

//*base

function greet(name) {
  const myname = "alex";
  console.log(`good morning ${name},my name is ${myname}`);
}

function greeta(name) {
  const myname = "dom";
  console.log(`good afternoon ${name},my name is ${myname}`);
}

// greet("dom");
// greeta("alex");

//*callback funtion

function morning(name) {
  console.log(`good morning ${name.toUpperCase()}`);
}

function afternoon(name) {
  console.log(`good afternoon ${name}`);
}

//higher order function

function greet1(name, cb) {
  cb(name);
  cb(name);
}

greet1("dom", morning);
