/**
 *1. Concatenar Arrays
Dado dos arrays arr1 y arr2, 
usa el spread operator para 
crear un nuevo array arr3 que contenga todos los 
elementos de arr1 seguidos por todos los elementos 
de arr2.
 */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Usar spread operator para concatenar arr1 y arr2 en arr3
let arr3 = [...arr1, ...arr2]

console.log(arr3); // [1, 2, 3, 4, 5, 6]
