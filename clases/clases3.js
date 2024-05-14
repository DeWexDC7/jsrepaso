/**
 * 3. Clase Rectángulo
Crea una clase Rectángulo con propiedades ancho y alto. 
Agrega un método para calcular el área del rectángulo.
 */

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    area() {
        return this.ancho * this.alto;  // Calcula el área multiplicando ancho por alto
    }
}

let rectangulo1 = new Rectangulo(5, 3);
console.log("Área del rectángulo:", rectangulo1.area());  // Asegúrate de llamar al método con paréntesis para obtener el resultado
