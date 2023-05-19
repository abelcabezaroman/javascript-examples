class Moto {
    #color;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    get color() {
        return `color: ${this.#color}`;
    }

    set color(color){
        if(color === 'Verde' || color === 'Negro'){
            this.#color = color;
        } else{
            console.error('Solo tenemos Motos Verdes y Negras')
        }
    }
}

const moto1 = new Moto('Kawasaki', 'Ninja');
moto1.color = "Negro"
console.log(moto1.color);
console.log(moto1.marca);