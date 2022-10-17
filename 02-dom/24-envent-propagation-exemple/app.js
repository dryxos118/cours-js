const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
// const heading = document.querySelector(".heading");

function sayHello() {
  console.log("salut toi");
}

// heading.addEventListener("click", sayHello);

btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = "je suis dans le container";
  container.appendChild(element);
});

container.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.classList.contains("heading")) {
    console.log("salut toi");
  }
});
