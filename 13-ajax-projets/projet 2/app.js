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
    getData(url);
  } catch (error) {
    console.log(error);
  }
});

//!plus vielle methode

const getData = (url) => {
  const xhr = new XMLHttpRequest();

  xhr.open("get", url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    const { value: joke } = JSON.parse(xhr.responseText);
    console.log(joke);
    if (xhr.status === 200) {
    } else {
      console.log({ status: xhr.status, text: xhr.statusText });
    }
  };
};
