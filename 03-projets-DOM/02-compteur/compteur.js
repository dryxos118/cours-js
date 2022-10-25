let value = 0;

const numbers = document.querySelector("#number");
const btn = document.querySelectorAll(".btn");

btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.classList.contains("i")) {
      value++;
    } else if (e.target.classList.contains("d")) {
      value--;
    } else {
      value = 0;
    }

    if (value < 0) {
      numbers.style.color = "red";
    } else if (value > 0) {
      numbers.style.color = "green";
    } else {
      numbers.style.color = "black";
    }
    numbers.textContent = value;
  });
});
