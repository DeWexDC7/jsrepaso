/**
 * Ejercicio 5: Excluir elementos específicos
Descripción: Dado un array de números, utiliza filter para obtener un nuevo array que excluya el número 5.
 */

let numeros = [1, 5, 3, 5, 6, 7, 5, 8, 9];
const Filtro = numeros.filter (numero=>numero !== 5);

console.log(Filtro);
