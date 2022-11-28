//* callbacks, promises, async/await

const t1 = document.querySelector(".one");
const t2 = document.querySelector(".two");
const t3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("clic clic");

  setTimeout(() => {
    t1.style.color = "red";

    setTimeout(() => {
      t2.style.color = "green";

      setTimeout(() => {
        t3.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);
});

console.log("je suis le deuxieme");
