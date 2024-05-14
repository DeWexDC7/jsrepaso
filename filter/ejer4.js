/**
 * Ejercicio 3: Productos por debajo de un precio
Descripción: Dado un array de productos, cada uno con una propiedad price, utiliza filter para encontrar todos los productos que cuesten menos de $100.
 */

let productos = [
    { id: 1, name: "Libro", price: 45 },
    { id: 2, name: "Lámpara", price: 120 },
    { id: 3, name: "Cuaderno", price: 20 }
];

const Precio = productos.filter  (
    producto => producto.price <= 100
);

console.log(Precio);