Aquí tienes algunos ejemplos prácticos utilizando la temática de Pokémon para ilustrar cómo usar var, let y const en JavaScript:

Ejemplo con var
javascript
Copy code
function mostrarPokemones() {
    for (var i = 0; i < 3; i++) {
        console.log("Pokémon número " + i);
    }
    console.log("Acceso al índice fuera del bucle: " + i); // i es accesible aquí porque var tiene alcance de función
}

mostrarPokemones();
Este ejemplo muestra cómo var permite que la variable i sea accesible fuera del bucle for dentro de la misma función, porque var tiene alcance de función.

Ejemplo con let
javascript
Copy code
function listarPokemones() {
    let pokemones = ['Pikachu', 'Charmander', 'Bulbasaur'];
    for (let i = 0; i < pokemones.length; i++) {
        console.log(pokemones[i]);
    }
    // console.log(i); // Esto causaría un error: "i is not defined" porque let tiene alcance de bloque
}

listarPokemones();
En este ejemplo, let se utiliza para definir tanto la lista de Pokémon como el índice del bucle. Aquí, i solo es accesible dentro del bucle for debido al alcance de bloque que proporciona let.

Ejemplo con const
javascript
Copy code
const equipoPokemon = ['Pikachu', 'Squirtle', 'Charizard'];

equipoPokemon.forEach(function(pokemon) {
    console.log("¡Voy a elegirte a ti, " + pokemon + "!");
});

// equipoPokemon = ['Meowth', 'Jigglypuff']; // Esto arrojaría un error porque const no permite la reasignación de la variable.
equipoPokemon.push('Meowth'); // Esto es permitido porque estamos modificando el contenido del array, no reasignando la variable.
console.log(equipoPokemon);
Aquí, const es usado para declarar un array que no será reasignado. Sin embargo, podemos modificar el array (por ejemplo, agregar más Pokémon al equipo) sin reasignar completamente la variable.

Estos ejemplos demuestran cómo usar var, let, y const en escenarios que podrían encontrarse en un programa relacionado con Pokémon, ayudando a manejar variables de manera efectiva y segura según el contexto.