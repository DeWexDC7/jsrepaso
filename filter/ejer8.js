/**
 * Ejercicio 7: Filtrar por múltiples condiciones
Descripción: Dado un array de números, utiliza filter para obtener números que sean mayores que 5 y menores que 15.
 */

let numeros = [2, 3, 5, 7, 10, 12, 18];

const Condciones = numeros.filter (numero => numero >5 && numero <15);

console.log (Condciones);
