const darkBtn = document.querySelector(".btn");

darkBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

console.log(darkBtn);
