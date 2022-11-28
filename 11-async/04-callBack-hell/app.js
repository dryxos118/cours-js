//* callbacks, promises, async/await

// boilingWater(1000);
// console.log("cut carottes");
// console.log("cut oignons");
// console.log("add oignons");
// console.log("add carottes");

// function boilingWater(time) {
//   console.log("bout...");

//   setTimeout(() => console.log("fini"), time);
// }

function boilingWater(time) {
  console.log("bout...");

  setTimeout(() => {
    console.log("fini");
    console.log("ajouter les carottes");

    setTimeout(() => {
      console.log("carotte fini");
      console.log("add oignons");
      setTimeout(() => {
        console.log("oignons fini");
      }, 5000);
    }, 5000);
  }, 10000);
  console.log("cut oignons");
}

boilingWater();
console.log("cut carotte");
