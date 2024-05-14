/**
 * Crea una función que declare una variable con var dentro de un bloque if que siempre se ejecute. 
 * Después de la ejecución del bloque, intenta imprimir la variable. 
 * Observa y reflexiona sobre si puedes acceder a la variable y por qué.
 */

function mayoriaedad(edad) {
    var edad;
        if (edad>17) {
            console.log("Mayor de edad");
        }
        else{
            console.log("Menor de edad");
        }

        return;
}

mayoriaedad(25);