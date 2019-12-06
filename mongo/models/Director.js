const mongoose = require('mongoose');

//crear un esquema - manera de representar la base de datos
//esquema != modelo

const directorSchema = new mongoose.Schema({
    //Mongo ya crea el id automaticamente
    nombre: String,
    edad: Number,
    bio:{
        type: String,
        default: 'No-bio'
    },
    nacionalidad:{
        type: String,
        enum: ['MX', 'USA', 'BR']
    },
    sexo:{
        type: String,
        enum: ['F', 'M', 'NA']
    },
    premios:{
        //Array de strings - ["Oscar", "Globo de Oro", "Etc"]
        type: [String]
    }
});

//pasar schema a mongo - (nombre del esquema, objeto del esquema)
const Director = mongoose.model('director', directorSchema)

//permiso para exportarlo a otros archivos
module.exports = Director;