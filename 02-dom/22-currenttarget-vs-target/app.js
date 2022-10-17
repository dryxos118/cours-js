//* currentTarget - se réfère toujours à l'élément sur lequel l'event handler a été attaché
//* target - identifie l'élément sur lequel l'event se produit

const btns = document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log("currentTarget", e.currentTarget);
    // e.currentTarget.style.color = "green";
    console.log("target", e.target);
  });
});
