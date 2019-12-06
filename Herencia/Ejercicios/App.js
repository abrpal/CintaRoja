/*
1. Hacer superclase Maestro y subclases Maestro de Física y
   Maestro de Música y a cada uno asignarle su materia y
   calcular su promedio de grupo a partir de calificaciones
   (puedes usar arreglos). El maestro de física tiene un
   atributo “antiguedad” que guarda un valor numerico,
   mientras que el maestro de música tiene un atributo “edad”
   también guardando un valor numérico.



const { MaestroFisica } = require ('./MaestroFisica');
const { MaestroMusica } = require ('./MaestroMusica');


let Gloria = new MaestroFisica(5);
let Angelo = new MaestroMusica(35);

let califGloria = [9,10,11,12]

console.log(Gloria.getPromedio(califGloria))
console.log(Angelo.edad)
*/


/*
3.- Crear una clase Bebida que herede a dos clases Cerveza
    y Refresco. Ambas clases deben tener la propiedad
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo
    porcentajeAlcohol. Crear los getters y setters
    correspondientes.
*/

const {Refresco} = require('./Refresco')
const {Cerveza} = require('./Cerveza')

const CocaCola = new Refresco(20,600);
const Corona = new Cerveza(5,550);

console.log(CocaCola.getGramosAzucar())