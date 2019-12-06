//create
//read
//update
//delete

const request = require('request');

URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`

function createAuthor(nombre, apell, nac, bio, gender, age){
  
  const jsonSend ={
    name: nombre,
    last_name: apell,
    nacionalidad: nac,
    biography: bio,
    gender,
    age
  }

  return new Promise((resolve, reject) => {
    request.post(URL, {form:jsonSend}, (err, res, body) => {
        if(err) reject('Falla al crear el autor');
        if(res.statusCode === 201){
            resolve(JSON.parse(body));
            console.log(`Id creado: ${JSON.parse(body).id}`)
            console.log(`Nombre: ${JSON.parse(body).name}`)
        }else{
            reject(res.statusCode);
        }
    });
  });
}

function modifyAuthorsNameById(id, name){

    const jsonSend = {name}

    return new Promise((resolve, reject) => {
        request.patch(`${URL}${id}/`, {form:jsonSend}, (err, res, body) => {
            if(err) reject('Falla el modificar el nombre de autor');
            if(res.statusCode === 200){
                resolve(JSON.parse(body));
                console.log(`Id modificado: ${JSON.parse(body).id}`);
                console.log(`Nuevo nombre: ${JSON.parse(body).name}`);
            }else{
                reject(res.statusCode);
            }
        });
    });
}

function getAuthorById(id){
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

function getAllAuthors(){
  request.get(URL, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

function deleteAuthorById(AuthorsId){
    return new Promise((resolve, reject) => {
        request.delete(`${URL}${AuthorsId}/`, (err, res, body) => {
            if(err) reject('error al borrar')
            if(res.statusCode === 204){
                resolve(res.statusCode);
            }else{
                reject('status code no es 204 al borrar');
            }
        }); 
    });
}


createAuthor('tu tio', 'don V', 'MX', 'biog', 'M', 32)
    .then((respuesta) => modifyAuthorsNameById(respuesta.id, 'Gloria'))
    .then((respuesta) => getAuthorById(respuesta.id))
    .then((respuesta) => deleteAuthorById(respuesta.id))
    .then((respuesta) => console.log(respuesta))
    .then(() => )
    .catch((err) => {console.log(err)})