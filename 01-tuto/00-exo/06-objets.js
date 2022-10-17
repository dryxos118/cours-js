const car = {
  marque: "audi",
  model: "A4",
  age: "2015",
  couleurs: ["bleu", "rouge", "noir"],
  hybride: false,

  drive: function () {
    console.log("vroum", "vroum");
  },
  stop: function () {
    console.log("la voiture s'arrete");
  },
};

console.log(car.marque);
console.log(car.couleurs[2]);
car.drive();
car.stop();
