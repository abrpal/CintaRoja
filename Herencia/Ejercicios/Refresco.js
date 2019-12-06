
const {Bebida} = require('./Bebida')

class Refresco extends Bebida{
    constructor(gramosAzucar, mililitros){
        super(mililitros);
        this.gramosAzucar = gramosAzucar;
        console.log("Se creo un Refresco");
    }

    setGramosAzucar(gramosAzucar){
        this.gramosAzucar = gramosAzucar;
    }

    getGramosAzucar(){
        return this.gramosAzucar;
    }
}

module.exports = {
    Refresco
}