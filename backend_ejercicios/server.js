
const express = require('express')
const request = require('request')

const app = express();

//use vamos a configurar
//agregar al objeto req, el body para poderlo utilizar
app.use(express.urlencoded({ extended: true}));
//default json 
app.use(express.json());

/*
----------------------------------------------------------------
    1.- Agrega un endpoint '/api/' que responda a 
        una petición de tipo GET con un código de estado 200 
        y el siguiente json: 
                    {'mensaje':'hola mundo'}
----------------------------------------------------------------
*/

app.get('/api/', (req, res) => {
    res.status(200).send({mensaje:'hola mundo'})
})

/*
----------------------------------------------------------------
    2.- Agrega un endpoint '/api/suma' que responda a una 
        petición de tipo GET con la suma de dos números que 
        reciba mediante las querys num1 y num2. El servidor
        debe responder con un código de estado 200 y un json 
        como el siguiente:
                        {'resultado': 7}
----------------------------------------------------------------
*/

app.get('/api/suma', (req, res) => {
    const suma = parseInt(req.query.num1) + parseInt(req.query.num2)
    res.status(200).send({resultado: suma})
})

/*
----------------------------------------------------------------
    3.- Agrega un endpoint '/api/usuario/' que responda a
        una petición de tipo GET con el nombre que sea 
        recibido a través de params. El servidor debe responder
        con un código de estado 200 y un json como este:
                      {'usuario': 'Edwin'}
----------------------------------------------------------------
*/

app.get('/api/usuario/:usrName', (req, res) => {
    res.status(200).send({usuario: req.params.usrName});
})

/*
----------------------------------------------------------------
    4.- Agrega un endpoint '/api/swapi' que responda a una
        petición de tipo GET con el personaje solicitado de 
                        https://swapi.co/
        El cliente debe mandar el número de personaje mediante
        params. La respuesta del servidor debe lucir algo así
                    {'personaje': {
                        'name': 'Luke Skywalker',
                        ...,
                    }}
----------------------------------------------------------------
*/

function getSwapiCharacterById(id){
    URL = 'https://swapi.co/api/people/'

    return new Promise((resolve, reject) => {
        request.get(`${URL}${id}/`, (err, res, body) => {
            if(err) reject('Problema al traer autor por id');
            if(res.statusCode === 200){
                resolve(JSON.parse(body));
            }else{
                reject('Sabe que pedo');
            }
        });
    });
}

app.get('/api/swapi/:id', (req, res) => {
    getSwapiCharacterById(req.params.id)
        .then((resultado) => res.send({name: resultado}))
        .catch((err) => console.log(err))
})

app.listen(3000, () => {
    console.log('server on port 3000')
}); 

