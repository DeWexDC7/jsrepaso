/**
 * Ejercicio 2: Usuarios activos
 * Descripción: Dado un array de objetos que representan usuarios con una propiedad isActive,
 * utiliza filter para obtener solo los usuarios activos.
 */

let usuarios = [
    { id: 1, name: "Ana", isActive: true },
    { id: 2, name: "Luis", isActive: false },
    { id: 3, name: "Juan", isActive: true }
];

// Utilizamos el método filter para obtener solo los usuarios activos
const usuariosActivos = usuarios.filter(usuario => usuario.isActive);

// Mostramos el resultado
console.log(usuariosActivos); // [{ id: 1, name: "Ana", isActive: true }, { id: 3, name: "Juan", isActive: true }]