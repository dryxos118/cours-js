const first = document.querySelector(".firstCounter");
const second = document.querySelector(".secondCounter");
// console.log(first);
// console.log(second);

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.num = value;
    console.log(this);
    //? partie selection
    this.btnPlus = element.querySelector(".plus");
    this.btnReset = element.querySelector(".reset");
    this.btnMoin = element.querySelector(".moin");
    this.count = element.querySelector(".valeur");
    //? partie bind
    this.incrementer = this.incrementer.bind(this);
    this.reset = this.reset.bind(this);
    this.decrease = this.decrease.bind(this);
    //? partie addEvent
    this.btnPlus.addEventListener("click", this.incrementer);
    this.btnReset.addEventListener("click", this.reset);
    this.btnMoin.addEventListener("click", this.decrease);
  }
  //! partie function
  //* btnPlus
  incrementer() {
    this.num++;
    // console.log(this.num);
    this.count.textContent = this.num;
  }
  //* btnReset
  reset() {
    this.num = 0;
    // console.log(this.num);
    this.count.textContent = this.num;
  }
  //* btnMoin
  decrease() {
    this.num--;
    // console.log(this.num);
    this.count.textContent = this.num;
  }
}

const firstC = new Counter(first, 100);

const secondC = new Counter(second, 200);

// console.log(firstC);
