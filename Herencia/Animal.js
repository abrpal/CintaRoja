

class Animal{
    constructor(patas, nombre){
        this.patas = patas;
        this.nombre = nombre;
        this.cerebro = true;
        console.log('Se creó el Animal');
    }

    getNombre(){
        return this.nombre;
    }
}

module.exports = {
    Animal
}