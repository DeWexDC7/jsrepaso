/**
 * 4. Clase Auto
Crea una clase Auto con propiedades marca, modelo y año. Agrega un método para mostrar la información del auto.
 */

class Auto{
    constructor(marca, modelo, anio)
    {
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
    }
    informacion()
    {
       console.log("el auto es de la marca ${this.marca}, del modelo ${this.modelo} y del anio ${this.anio}")
    }
}

let auto1= new Auto("Mazda", "GT4", "1992");
auto1.informacion();