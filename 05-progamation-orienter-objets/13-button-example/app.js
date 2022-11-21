const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".btn-plus");

console.log(btn);

//! ca marche pas
// btn.addEventListener("click", counter.increment);

//? ca marche
// btn.addEventListener("click", counter.increment.bind(counter));

btn.addEventListener("click", () => {
  counter.increment();
});
