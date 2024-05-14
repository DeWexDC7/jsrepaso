/**
 * Eercicio 4: Filtrar palabras por longitud
Descripción: Dado un array de palabras, utiliza filter para obtener solo aquellas palabras que tengan más de 4 letras.
 */

let palabras = ["mesa", "sol", "papelera", "libro", "silla"];

const CantidadPalabras = palabras.filter  (
    palabra => palabra.length > 4 
);

console.log (CantidadPalabras);

