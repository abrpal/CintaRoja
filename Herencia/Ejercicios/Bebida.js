

class Bebida{
    constructor(mililitros){
        this.mililitros = mililitros;
        console.log("Se creo una Bebida");
    }

    setMililitros(mililitros){
        this.mililitros = mililitros;
    }

    getMililitros(){
        return this.mililitros;
    }
}

module.exports = {
    Bebida
}