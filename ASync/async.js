const hola = (nombre) => {
    return `Qué tal, ${nombre}?`;
}

const adios = (nombre) => {
    return `Hasta pronto, ${nombre}`;
}

const suma = (num1, num2) => (num1 + num2);

const resta = (num1, num2) => (num1 - num2);

const divide = (num1, num2) => (num1 / num2);

const multiplica = (num1, num2) => (num1 * num2);

//const ordenSuperior = (num1, num2, callback) => callback(num1, num2);

const media = (array) => {
    let suma = 0;
    for(let i = 0 ; i < array.length ; i++){
        suma += array[i];
    }

    return (suma/array.length);
}

const mediana = (array) => {
    array.sort(function(a,b){return a-b}); 
    console.log(`Sorted array: ${array}`);

    index = array.length - 1;
    
    if((array.length % 2) === 0){
        //par
         console.log("par");
        return media([array[Math.floor((index/2))],  array[Math.floor((index/2) + 1)]]);
    }
    //impar
    console.log("impar");
    return array[index/2];
}

const ordenSuperior = (callback, array) => {
    return callback(array);
}

const array = [5, 5, 6, 7, 8, 9, 2, 8, 15, 0];

console.log(ordenSuperior(mediana,array));