

class Maestro{
    constructor(materia){
        this.materia = materia;
        //this.promedio = promedio;
        //this.calificaciones = calificaciones;
        console.log("Se creó un Maestro");
    }

    getPromedio(calificaciones){
        let suma = 0;
        for(let i = 0; i < calificaciones.length ; i++){
            suma += calificaciones[i];
        }
        return (suma/calificaciones.length)
    }
}

module.exports = {
    Maestro
}