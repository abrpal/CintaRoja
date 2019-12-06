
const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: {
        type:String,
        required:true
    },
    genero:{
        type:String,
        enum:["SUSPENSO", 'COMEDIA',"TERROR"]
    },
    director:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'director'
    }
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;