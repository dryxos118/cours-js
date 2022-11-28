//* Faire une soupe
//* couper les oignons
//* couper les carottes
//* faire bouillir l'eau 10 min
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

boilingWater(10000);
console.log("cut oignons");
console.log("cut carottes");

function boilingWater(time) {
  console.log("bout...");

  setTimeout(() => console.log("fini"), time);
}
