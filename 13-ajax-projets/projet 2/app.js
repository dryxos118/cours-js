const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const result = document.querySelector(".content");
const img = document.querySelector("img");

//! plus court avec les async await

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

  //! ou

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => displayData(data))
  //   .catch((err) => console.log(err));
});

//!avec les promesse (moyen en vitesse)

// btn.addEventListener("click", () => {
//   getData(url)
//     .then((response) => displayData(response))
//     .catch((err) => console.log(err));
// });

// const getData = (url) => {
//   return new Promise((resolve, rejetc) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open("get", url);
//     xhr.send();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState !== 4) return;

//       if (xhr.status === 200) {
//         resolve(xhr.response);
//       } else {
//         rejetc({
//           status: xhr.status,
//           text: xhr.statusText,
//         });
//       }
//     };
//   });
// };

// const displayData = (data) => {
//   const { value: joke } = JSON.parse(data);
//   const random = Math.random() * 1000;

//   result.textContent = joke;
// };
//!plus vielle methode (plus long)

// const getData = (url) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("get", url);
//   xhr.send();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== 4) return;
//     const { value: joke } = JSON.parse(xhr.responseText);
//     console.log(joke);
//     if (xhr.status === 200) {
//     } else {
//       console.log({ status: xhr.status, text: xhr.statusText });
//     }
//   };
// };
