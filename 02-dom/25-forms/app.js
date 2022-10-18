//*submit event listener
//*prevent default
//*comment avoir la valeur

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("formulaire soumis");
  const nameValue = name.value;
  console.log(nameValue);
  console.log(password.value);
  name.value = "";
  password.value = "";
});
