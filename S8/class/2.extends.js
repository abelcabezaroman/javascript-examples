class Vehiculo {
    constructor(nombre, color = 'Blanco') {
        this.nombre = nombre
        this.color = color
    }

    arrancar() {
        console.log(`Arrancando el ${this.nombre}`);
    }

    aparcar() {
        console.log(`Aparcando el ${this.nombre}`);
    }

}

class Coche extends Vehiculo {
    constructor(nombre, color, esDescapotable) {
        super(nombre, color);
        this.esDescapotable = esDescapotable;
    }
}

class Moto extends Vehiculo {
    constructor(nombre, color, tieneSidecar) {
        super(nombre, color);
        this.tieneSidecar = tieneSidecar;
    }

}

const coche1 = new Coche('Ford Mustang', 'Negro', false);
console.log(coche1.arrancar());
const moto1 = new Moto('Kawasaki Ninja', 'Verde', false);
console.log(moto1.arrancar());