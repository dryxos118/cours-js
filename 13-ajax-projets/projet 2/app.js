const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const result = document.querySelector(".content");

const randomJokeChuckNorris = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    result.textContent = data.value;
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", () => {
  randomJokeChuckNorris(url);
});
