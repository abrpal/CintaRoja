

const { Animal } = require('./Animal');

class Perro extends Animal {
    constructor(raza, color, nombre){
        super(4,nombre);    //Ejecutar la clase padre

        this.raza = raza;
        this.color = color;

        console.log("Se creó un perro");
    }
}

module.exports = {
    Perro
}



