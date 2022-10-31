const gif = document.querySelector(".preloader");

console.log(gif);

window.addEventListener("load", function () {
  gif.classList.add("hide-preloader");
});

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

console.log(btn);
console.log(video);

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
