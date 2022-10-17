//* l'objet Math

let number = 4.56789;
let result = Math.floor(number); //!arondit toujour aussi

number = 4.11111; //!arrondie au dessus
result = Math.ceil(number);

result = Math.round(number); //!arondit au plus proche

result = Math.sqrt(number); //!racine carré

result = Math.PI; //!affiche PI

result = Math.min(1, 2, 3, 4, 5); //!le plus petit de la liste seulement

result = Math.max(1, 2, 3, 4, 5, 6, 7, 8); //!et la le plus grand

//?0(inclus) à 1(non inclus)
result = Math.random();
//?0 a 9 mais decimaux
result = Math.random() * 10;
//? de 1 à 10 inclus
result = Math.ceil(Math.random() * 10);
//? une autre option
result = Math.floor(Math.random() * 10 + 1);
