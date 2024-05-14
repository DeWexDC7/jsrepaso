/**
 * Ejercicio 1: Filtrar números impares
Descripción: Dado un array de números, utiliza filter para obtener solo los números impares.
 */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosImpares = numeros.filter (
    numero => numero % 2 !==0
);

console.log(numerosImpares);