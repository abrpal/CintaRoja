
const request = require('request');

function getPeopleById(idPersonaje){
    return new Promise((resolve, reject) => {
        request.get(`https://swapi.co/api/people/${idPersonaje}`, (err, response, body) => {
            if(err) return console.log('Error');
            if (response.statusCode === 200) {
                resolve(JSON.parse(body))
            } else {
                reject('Error buscando el personaje')
            }
        });        
    });
}

function getMovieByUrl(url){
    return new Promise((resolve, reject) => {
        request.get(url, (err, response, body) => {
            if(err) return console.log('Error');
            if(response.statusCode === 200) {
                resolve(JSON.parse(body))
            } else {
                reject('Error en la peticion de peliculas')
            }
        });
    });
}

// getPeopleById(5)
//     .then((respuesta) => {
//         console.log(respuesta.name);
//         return getMovieByUrl(respuesta.films[0])
//     })
//     .then((result) => {     //.then attacheado a primer .then
//         console.log(result.title)
//     })
//     .catch((err) => {       //sirve para todas las promesas
//         console.log(err);
//     })

getPeopleById(5)
    .then((respuesta) => getMovieByUrl(respuesta.films[0]))
    .then((result) => console.log(result.title))          //.then attacheado a primer .then
    .catch((err) => console.log(err)) //sirve para todas las promesas
