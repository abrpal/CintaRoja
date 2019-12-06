const express = require('express')

const app = express();

//use vamos a configurar
//agregar al objeto req, el body para poderlo utilizar
app.use(express.urlencoded({ extended: true}));
//default json 
app.use(express.json());


//crear el enpoint, no lo consumimos
app.get('/', (request, response) => {
    console.log('entre perros');
    //responder al web browser - si no se queda colgada la pagina
    response.send({mensaje: 'Mi primera respuesta desde el backend'})
})

app.get('/saludo', (req, res) => {
    res.send({mensaje:'Hola perros '})
})

//http://localhost:3000/users/21 - 21 es una variable
app.get('/users/:uid', (req, res) => {      //uid es una varible porque esta despues de :
    console.log(req.params)      //todo lo que el usuario envia al server llega por req
    res.send({message:`Usuario a buscar ${req.params.uid}`});
})

//Para hacer una query
//  /search?keyword=palabraquery        puedes concatenar query parameters en la url con &
// todo lo que viene despues de ? son query params
app.get('/search', (req, res) => {
    console.log(req.query)
    res.send({message: 'Busqueda'})
})

//spread objects?
app.post('/users', (req, res) => {
    console.log(req.body)
    res.status(201).send({...req.body, id:1})
})

  //levanta el servidor, necesita puerto y callback que se ejecuta al levantar el servidor
app.listen(3000, () => {
    console.log('server on port 3000')
}); 