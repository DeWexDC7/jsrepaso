/**
 * 2. Copiar un Objeto
Dado un objeto persona, usa el spread operator 
para crear una copia del objeto llamada personaCopy.
 */

let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
// Usar spread operator para copiar el objeto persona en personaCopy
let personaCopy = {...persona}

console.log(personaCopy); // { nombre: "Juan", edad: 30, ciudad: "Madrid" }
