
const express = require('express');
const { Director, Pelicula } = require('./models/index')

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.post('/director', (req, res) => {
    const newDirector = Director(req.body);
    newDirector.save((err, director) => {   //save tiene un callback, si hay error devuelve error
                                            //si no, regresa el registro(objeto completo) que guardó en la dbc
        err
        ? res.status(400).send(err)
        : res.status(201).send(director);
    });
});

app.post('/pelicula', (req, res) => {
    const newPelicula = Pelicula(req.body);
    newPelicula.save((err, pelicula) => {   //save tiene un callback, si hay error devuelve error
                                            //si no, regresa el registro(objeto completo) que guardó en la dbc
        err
        ? res.status(400).send(err)
        : res.status(201).send(pelicula);
    });
});

app.get('/all/directors',(req, res)=>{
    Director.find().exec()      //exec es una promesa()
        .then((result)=> {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err)
        });
});

app.get('/all/peliculas',(req, res)=>{
    Pelicula.find()
    .populate('director')
        .exec()      //exec es una promesa()
        .then((result)=> {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err)
        });
});

app.get('/directors/:id',(req, res)=>{
    const id = req.params.id;
    Director.findById(id).exec()      //exec es una promesa()
        .then((result) => {
            result
            ? res.send(result)
            : res.status(404).send({message:"Director not found"});
        }).catch((err) => {
            res.status(400).send(err)
        });
});

app.get('/pelicula/:id',(req, res)=>{
    const id = req.params.id;
    Pelicula.findById(id).exec()      //exec es una promesa()
        .then((result) => {
            result
            ? res.send(result)
            : res.status(404).send({message:"Pelicula not found"});
        }).catch((err) => {
            res.status(400).send(err)
        });
});

app.patch('/directors/:id',(req, res)=>{
    const id = req.params.id;
    Director.findByIdAndUpdate(id,
        req.body, 
        {new: true}).exec()      //new true es para regrese el objeto modificado, si no regresa el viejo
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
});

app.patch('/peliculas/:id',(req, res)=>{
    const id = req.params.id;
    Pelicula.findByIdAndUpdate(id,
        req.body, 
        {new: true}).exec()      //new true es para regrese el objeto modificado, si no regresa el viejo
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
});

app.post('/add/premio/:idDirector', (req, res) => {
    Director.findByIdAndUpdate(req.params.idDirector, 
        { $push: {premios: [req.body.premios]} }, 
        {new:true}).exec()
        .then((result)=>{
            res.status(200).send(result);
        })
        .catch((err)=>{
            res.status(409).send(err);
        });
});

app.listen(3000, () => {
    console.log('Server on');
});