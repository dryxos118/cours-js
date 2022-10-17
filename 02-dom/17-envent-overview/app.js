//*envents

//*sellectionner un element
//*addEventListenner() quel evenement on veut faire

const btn = document.querySelector(".btn");

const heading = document.querySelector("h2");
btn.addEventListener("click", function () {
  //   console.log("hey tu m'a cliquer");
  heading.classList.toggle("red");
});
