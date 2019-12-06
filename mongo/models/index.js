const mongoose = require('mongoose');
const Director = require('./Director');
const Pelicula = require('./Pelicula');

const URL = 'mongodb+srv://admin:qwerty123@cluster0-z8pxa.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URL, (err) => {
    if(!err) console.log('Conexion con base de datos exitosa')
    else console.log(err);
});

module.exports = {
    Director,
    Pelicula
}