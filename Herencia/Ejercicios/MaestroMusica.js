

const {Maestro} = require('./Maestro');

class MaestroMusica extends Maestro{
    constructor(edad){
        super('Musica');
        this.edad = edad;
        console.log("Se creó un Maestro de musica")
    }
}

module.exports = {
    MaestroMusica
}