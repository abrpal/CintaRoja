
/*
1.- Modelar la base de datos para Publicaciones y Usuarios (Como FB )
Las publicaciones son un modelo
Los usuario son un modelo
NO  PIENSES EN RELACIONARLOS (SON MODELOS INDEPENDIENTES)
2.- Hacer un crud por cada uno de os modelos (POST, GET, PATCH)
*/

const express = require('express');
const  {
        Publicacion, 
        User
        } = require('./models/index')

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.post('/Publication', (req, res) => {
    const newPub = new Publicacion(req.body);
    newPub.save((err, pub)=>{
        err
        ? res.status(400).send(err)
        : res.status(201).send(pub);
    });
});

app.post('/FbUser', (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, pub)=>{
        err
        ? res.status(400).send(err)
        : res.status(201).send(pub);
    });
});

app.get('/FbUser/:name', (req, res)=>{
    User.find({name:req.params.name})
    .populate('publicacion')
    .exec()
    .then((result)=>{res.status(201).send(result)})
    .catch((err)=>{res.status(400).send(err)});
});

app.get('/Publicacion/:id', (req, res)=>{
    User.findById(req.params.id).exec()
    .then((result)=>{res.status(201).send(result)})
    .catch((err)=>{res.status(400).send(err)});
});

app.post('/add/Publicacion/:Username', (req, res) => {
    const newPost = new Publicacion(req.body);
    newPost.save((err, post)=>{
        err
        ? res.status(400).send(err)
        : newPostId = post.id;
    });

    User.findByIdAndUpdate(req.params.Username, 
        
        { $push: {publicacion: [req.body.publicacion]} }, 
        {new:true})
        .exec()
        .then((result)=>{
            res.status(200).send(result);
        })
        .catch((err)=>{
            res.status(409).send(err);
        });
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})