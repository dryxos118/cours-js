const btnOn = document.querySelector(".btn-modal");
const btnOff = document.querySelector(".close");
const div = document.querySelector(".modal");

btnOn.addEventListener("click", function () {
  //   console.log("coucou");
  div.classList.add("visibility-modal");
});

btnOff.addEventListener("click", function () {
  div.classList.remove("visibility-modal");
});
