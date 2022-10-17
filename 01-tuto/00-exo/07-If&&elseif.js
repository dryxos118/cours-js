const person1 = {
  name: "alex",
  age: 19,
  satus: "residents",
};

const person2 = {
  name: "max",
  age: 18,
  satus: "touriste",
};

if (person1.age > 18 && person1.satus === "residents") {
  console.log("tu peux voter", person1.name);
} else {
  console.log("tu peux pas voter", person1.name);
}

if (person2.age > 18 && person2.satus === "residents") {
  console.log("tu peux voter", person2.name);
} else {
  console.log("tu peux pas voter", person2.name);
}
