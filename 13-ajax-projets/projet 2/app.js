const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const result = document.querySelector(".content");
const img = document.querySelector("img");

const randomJokeChuckNorris = async () => {
  const response = await fetch(url);
  const data = await response.json();
  result.textContent = data.value;
  img.classList.add("shake-img");
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, Math.random() * 1000);
};

btn.addEventListener("click", () => {
  try {
    randomJokeChuckNorris(url);
  } catch (error) {
    console.log(error);
  }
});
