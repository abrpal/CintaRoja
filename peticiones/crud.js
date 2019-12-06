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

  request.post(URL, {form:jsonSend}, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

function patchAuthorsName(id, nombre){
  
  const jsonSend = {name: nombre}

  request.patch(`${URL}${id}/`, {form:jsonSend}, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

function getAuthorById(id){
  request.get(`${URL}${id}/`, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body).name);
  });
}

function getAllAuthors(){
  request.get(URL, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

function deleteAuthorById(AuthorsId){
  request.delete(`${URL}${AuthorsId}/`, (err, res, body) => {
    console.log(res.statusCode);
  });
}

getAllAuthors();
//deleteAuthorById('3581');
//getAuthorById('3586');
//createAuthor('tu tio', 'sam', 'MX', 'biog', 'M', 32);
//patchAuthorsName(3586, 'nuevoNombre');