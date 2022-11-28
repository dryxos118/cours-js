//* Le JS est un déroulement simple, un langage synchrone. On éxécute le programme ligne par ligne

console.log("je suis le 1");
boilingWater();
console.log("je suis le 2");
console.log("je suis le 3");

function boilingWater() {
  console.log("bout...");

  for (let i = 0; i < 100000; i++) {
    console.log("toujour pas pret");
  }
  console.log("fini");
}
