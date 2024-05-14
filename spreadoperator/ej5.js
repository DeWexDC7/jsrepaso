/**
 * 5. Desestructurar Arrays
 * Dado un array numeros, usa el spread operator 
 * para extraer el primer elemento y el resto de los 
 * elementos en variables separadas.
 */

let numeros = [1, 2, 3, 4, 5];
// Usar spread operator para extraer el primer elemento y el resto de los elementos
let [primero, segundo,...resto] = numeros;

console.log(primero); // 1
console.log(segundo);
console.log(resto); // [2, 3, 4, 5]
