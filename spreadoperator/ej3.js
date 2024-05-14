/**
 * 3. Pasar Argumentos a una Función
Dado un array numeros, usa el spread operator 
para pasar sus 
elementos como argumentos a una función sumar.
 */

function sumar(a, b, c) {
    return a + b + c;
}

let numeros = [1, 2, 3];
// Usar spread operator para pasar los elementos de 
//numeros a la función sumar
let resultado =  sumar(...numeros)

console.log(resultado); // 6
