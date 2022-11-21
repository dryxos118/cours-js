//* call s'execute instantanément, 1er argument - this, 2éme argument - list d'items

const alex = {
  name: "alex",
  age: 20,
  greet() {
    console.log(this);
    console.log(`bonjour je suis ${this.name} et j'ai ${this.age} ans`);
  },
};

const dom = {
  name: "dom",
  age: 25,
};

// alex.greet();

function greet() {
  console.log(this);
  console.log(`bonjour je suis ${this.name} et j'ai ${this.age} ans`);
}

//greet();

const secondeGreet = alex.greet;

console.log(secondeGreet);

//* call

greet.call(alex);
