const btns = document.querySelectorAll(".btn");
const txt1 = document.querySelector(".txt1");
const txt2 = document.querySelector(".txt2");
const txt3 = document.querySelector(".txt3");
const show = document.querySelectorAll(".question");

console.log(show);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("question-btn1")) {
      txt1.classList.toggle("show-text");
      txt2.classList.remove("show-text");
      txt3.classList.remove("show-text");
    }
    if (e.currentTarget.classList.contains("question-btn2")) {
      txt2.classList.toggle("show-text");
      txt1.classList.remove("show-text");
      txt3.classList.remove("show-text");
    }
    if (e.currentTarget.classList.contains("question-btn3")) {
      txt3.classList.toggle("show-text");
      txt1.classList.remove("show-text");
      txt2.classList.remove("show-text");
    }
  });
});
