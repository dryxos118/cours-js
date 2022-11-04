const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const text = document.querySelectorAll(".content");

console.log(about);
console.log(btns);
console.log(text);

about.addEventListener("click", function (e) {
  const txt = e.target.dataset.id;
  console.log(txt);

  if (txt) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    text.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(txt);
    element.classList.add("active");
  }
});
