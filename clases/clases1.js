class Persona
{
    constructor(nombre,edad)
    {
        this.nombre =  nombre;
        this.edad = edad;
    }

    saludar(){
        console.log("hola ${this.nombre}");
    }
}

let persona1 = new Persona ("dc", 9);
persona1.saludar();

