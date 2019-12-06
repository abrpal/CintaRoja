

const {Maestro} = require('./Maestro');

class MaestroFisica extends Maestro{
    constructor(antiguedad){
        super('Fisica');
        this.antiguedad = antiguedad;
        console.log("Se creo un Maestro de fisica");
    }
}

module.exports = {
    MaestroFisica
}