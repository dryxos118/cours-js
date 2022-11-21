//* call s'execute instantanément, 1er argument - this, 2éme argument - array items

const alex = {
  name: "alex",
  age: 20,
};

const dom = {
  name: "dom",
  age: 25,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `bonjour je suis ${this.name} et j'ai ${this.age} ans et j'habite a ${city}, en ${country}`
  );
}

// greet.call(alex, "herlies", "fr");
// greet.call(dom, "herlies", "fr");
// greet.call({ name: "max", age: 17 }, "herlies", "fr");

greet.apply(alex, ["herlies", "fr"]);
greet.call(dom, ["herlies", "fr"]);
