//* bind s'assigne et utiler plus tard, 1er argument - this, 2éme argument - array items
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

// assigne pour appeler plus tard

const domGreet = greet.bind(dom, "herlies", "fr");
