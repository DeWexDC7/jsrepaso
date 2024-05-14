/**
 * Ejercicio 6: Usuarios por país
Descripción: Dado un array de objetos que representan usuarios, 
cada uno con una propiedad country, utiliza filter para seleccionar usuarios de un país específico, por ejemplo, "España".
 */

let usuarios = [
    { id: 1, name: "Carlos", country: "España" },
    { id: 2, name: "Sarah", country: "Reino Unido" },
    { id: 3, name: "Andrea", country: "España" }
];

const Pais = usuarios.filter ( usuarios => usuarios.country = "España");

console.log(Pais);