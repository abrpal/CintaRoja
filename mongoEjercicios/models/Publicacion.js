
const mongoose = require('mongoose');

const PublicationSchema = new mongoose.Schema({
    usuario:String,
    text:String
});

const Publication = mongoose.model('publicacion', PublicationSchema);

module.exports = Publication;