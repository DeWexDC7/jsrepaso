/**
 * 2. Clase Círculo
Crea una clase Círculo con una propiedad radio. Agrega métodos para calcular el área 
y la circunferencia del círculo.
 */

class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    area() {
        return Math.PI * (this.radio * this.radio);  // Usar Math.PI para precisión y this.radio para acceder a la propiedad
    }

    circuferencia() {
        return 2 * Math.PI * this.radio;  // Usar Math.PI y this.radio
    }
}

let circulo1 = new Circulo(2);
console.log("Área del círculo:", circulo1.area());         // Debería mostrar el área del círculo con radio 2
console.log("Circunferencia del círculo:", circulo1.circuferencia()); // Debería mostrar la circunferencia del círculo con radio 2
