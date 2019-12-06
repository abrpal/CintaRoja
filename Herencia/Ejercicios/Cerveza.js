
const {Bebida} = require('./Bebida')

class Cerveza extends Bebida{
    constructor(porcentajeAlcohol, mililitros){
        super(mililitros);
        this.porcentajeAlcohol = porcentajeAlcohol;
        console.log("Se creo una cheve");
    }

    setPorcentajeAlcohol(porcentajeAlcohol){
        this.porcentajeAlcohol = porcentajeAlcohol;
    }

    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }
}

module.exports = {
    Cerveza
}