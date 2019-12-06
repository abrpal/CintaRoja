
//Definicion de la promesa (se retorna)
function miPrimeraPromesa(numero){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(numero === 5){
                resolve('Se cumplio la promesa')
            } else {
                reject('No se cumplio la promesa')
            }
        }, 300)
    });
}
//Ejecucionls de la funcion y se recibe la respuesta
//resolve y reject reciben un parametro y lo recibes en el callback de 
    //then(callback(parametroX)) & catch(callback(parametroX))
miPrimeraPromesa(5)
    .then( (resolve) => {
        console.log(resolve);
        console.log('THEN');
    })
    .catch( (reject) => {
        console.log(reject);
        console.log('CATCH');
    })