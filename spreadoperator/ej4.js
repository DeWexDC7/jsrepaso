/**
 * 4. Añadir Propiedades a un Objeto
Dado un objeto libro y un objeto detalles, 
usa el spread operator para combinar 
ambos objetos en un nuevo objeto libroCompleto.
 */

let libro = { titulo: "El Quijote", autor: "Miguel de Cervantes" };
let detalles = { año: 1605, genero: "Novela" };
// Usar spread operator para combinar libro y detalles en libroCompleto
let libroCompleto = { ...libro, ...detalles}

console.log(libroCompleto); // { titulo: "El Quijote", autor: "Miguel de Cervantes", año: 1605, genero: "Novela" }
