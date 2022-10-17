// les switch

const dice = 1;

// avec des if

// if (dice === 1) {
//   console.log("tu a fait 1");
// }
// if (dice === 2) {
//   console.log("tu a fait 2");
// }
// if (dice === 3) {
//   console.log("tu a fait 3");
// }
// if (dice === 4) {
//   console.log("tu a fait 4");
// }
// if (dice === 5) {
//   console.log("tu a fait 5");
// }
// if (dice === 6) {
//   console.log("tu a fait 6");
// }

//else if

// if (dice === 1) {
//   console.log("tu a fait un");
// } else if (dice === 2) {
//   console.log("tu a fait 2");
// } else {
//   console.log("tu a pas jetais de dé");
// }

//switch

switch (dice) {
  case 1:
    console.log("tu a fait 1");
    break;

  case 2:
    console.log("tu a fait 2");
    break;

  case 3:
    console.log("tu a fait 3");
    break;

  case 4:
    console.log("tu a fait 4");
    break;
  default:
    console.log("tu n'a pas jetait de dé");
    break;
}
