/**
 * Ejercicio 2: Desestructuración de Objetos
Dado un objeto persona, usa el Rest operator para extraer las propiedades nombre y edad, y el resto de las propiedades en una nueva variable.
 */

let persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Barcelona",
    profesion: "Diseñadora",
    pais: "España"
};
// Usar el Rest operator para extraer 'nombre' y 'edad' y el resto de las propiedades
// Escribe tu código aquí

let {nombre, edad, ...otros}=persona;

console.log(nombre); // Ana
console.log(edad);   // 28
console.log(otros);  // { ciudad: "Barcelona", profesion: "Diseñadora", pais: "España" }
