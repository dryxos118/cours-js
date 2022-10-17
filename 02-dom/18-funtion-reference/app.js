//* reference a funtion

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changecolor() {
  // console.log("hello");
  heading.classList.toggle("red");
}

btn.addEventListener("click", changecolor);
