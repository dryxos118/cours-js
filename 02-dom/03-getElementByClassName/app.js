//* node-list = array-like object => collection
//* index, accès propriéré length mais pas les méthodes sur un tableau

const headings = document.getElementsByTagName("h1");

// console.log(headings);
//*les fonction sur les tableau marche pas dessus

const betterHeadings = [...headings];
// console.log(betterHeadings);

betterHeadings.forEach(function (item) {
  //   console.log(item);
});

const items = document.getElementsByTagName("li");
console.log(items);

items[2].style.color = "orange";
