//* JSON.stringify(), JSON.parse()

// const friends = ["alex", "dom", "nuts"];

// console.log(friends);

// // localStorage.setItem("friends", friends);

// // const values = localStorage.getItem("friends");
// // console.log(values);

// localStorage.setItem("friends", JSON.stringify(friends));

// const values = JSON.parse(localStorage.getItem("friends"));

// console.log(values);
// console.log(values[0]);
// console.log(values[1]);
// console.log(values[2]);

//todo demo du principe pour simuler une base de donner

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);

fruits.push("pomme");
fruits.push("banane");

localStorage.setItem("fruits", JSON.stringify(fruits));
