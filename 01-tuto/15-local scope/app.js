//todo: Scope Local
//! ne peut pas être accessible en-dehors du bloc de code
//* if - NOT VAR

let name = "bob";

function names() {
  const name = "bobi";
  const age = 25;

  //code...

  becomesglobal = "global variable";
}

names();

console.log(becomesglobal);
