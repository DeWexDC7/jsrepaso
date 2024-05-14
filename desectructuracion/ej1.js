/**
 * Ejercicio 1: Desestructuración de Arrays
Dado un array numeros, usa el Rest operator para extraer los primeros dos elementos en variables separadas 
y el resto de los elementos en una nueva variable.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Usar el Rest operator para extraer los primeros dos elementos y el resto
// Escribe tu código aquí
let [primero, segundo, ...resto] = numeros;

console.log(primero); // 1
console.log(segundo); // 2
console.log(resto);   // [3, 4, 5, 6, 7, 8, 9]
