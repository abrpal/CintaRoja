
const mongoose = require('mongoose');
const Publicacion = require('./Publicacion');
const User = require('./Usuario');

URL = 'mongodb+srv://admin:qwerty123@cluster0-z8pxa.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URL, (err) => {
    err 
    ? console.log(err)
    : console.log('Conexion con MongoDB.Atlas exitosa');
})

module.exports ={
    Publicacion,
    User
}