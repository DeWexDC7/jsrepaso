/**
 * Escribe un programa que use un bucle for con let para crear un temporizador que imprima un número cada segundo. 
 * El temporizador debe contar de 1 a 5. 
 * Observa cómo se comporta let cuando se utiliza en este contexto de temporizador y cómo afecta la salida del bucle.
 */

for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}