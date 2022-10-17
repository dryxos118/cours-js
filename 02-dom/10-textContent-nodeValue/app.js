//*nodeValue
//*textContent a retenir plus celui la

const item = document.getElementById("special");
const value = item.nodeValue;
// console.log(value);
// console.log(item.childNodes[0].nodeValue);
// item.childNodes[0].nodeValue = "test";//*change la veleur
// console.log(item.childNodes[0].nodeValue);
// console.log(item.firstChild.nodeValue);

const easyValue = item.textContent;
console.log(easyValue);

item.textContent = "hello world"; //*aussi change la valeur
