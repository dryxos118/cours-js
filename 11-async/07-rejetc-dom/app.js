const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");
const url = "https://picsum.photos/200";

btn.addEventListener("click", () => {
  // console.log(loadImg(url));
  loadImg(url)
    .then((img) => container.appendChild(img))
    .catch((err) => console.log(err));
});

const loadImg = (url) => {
  return new Promise((resolve, rejet) => {
    let img = new Image();

    img.addEventListener("load", () => {
      resolve(img);
    });

    img.addEventListener("error", () => {
      rejet(new Error(`echec du chargement de ${url}`));
    });

    img.src = url;
  });
};
