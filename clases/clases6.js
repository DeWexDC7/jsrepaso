/**
 * 5. Clase Banco y Cuenta
Crea una clase Banco que tenga una lista de Cuentas. 
La clase Cuenta debe tener propiedades nombre y saldo. 
Agrega métodos para depositar y retirar dinero de la cuenta.
 */

class Cuenta {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            console.log('Fondos insuficientes.');
        }
    }

    mostrarSaldo() {
        console.log(`Saldo de ${this.nombre}: ${this.saldo}`);
    }
}

class Banco {
    constructor() {
        this.cuentas = [];
    }

    agregarCuenta(cuenta) {
        this.cuentas.push(cuenta);
    }

    mostrarCuentas() {
        this.cuentas.forEach(cuenta => cuenta.mostrarSaldo());
    }
}

let cuenta1 = new Cuenta("Juan", 1000);
let cuenta2 = new Cuenta("Ana", 2000);

let banco = new Banco();
banco.agregarCuenta(cuenta1);
banco.agregarCuenta(cuenta2);
banco.mostrarCuentas();

cuenta1.depositar(500);
cuenta1.mostrarSaldo();

cuenta2.retirar(1000);
cuenta2.mostrarSaldo();