//* function fléchées parametre par defaut

sayHi();
const dom = "dom";

function sayHi(name = "anonyme") {
  console.log(`hey ${name}`);
}

sayHi(dom);

const sayHello = (name = "alex") => console.log(`hey ${name}`);

sayHello();
