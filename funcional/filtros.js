

const lista = [{nombre: "nombra", edad: 28},
{nombre: "nombre", edad: 24},
{nombre: "nombri", edad: 25},
{nombre: "nombro", edad: 26},
{nombre: "nombru", edad: 27},]

const filtro = lista.filter((elemento, index, lista) => {
    return elemento.edad > 26
})

console.log(filtro)


/*
----------------------------------------------------------------
                  Programación Funcional
                          Filter
    1.- A partir del siguiente arreglo de animalitos: 
    const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];
    Genera un nuevo arreglo en el que solo se encuentren
    los conejos del arreglo original. */


    const animalitos = [
        { nombre: "carlitos"  , especie: "conejo" },    // 0
        { nombre: "esteban"   , especie: "perro" },     // 1
        { nombre: "fabiruchis", especie: "tortuga" },   // 2
        { nombre: "anita"     , especie: "gato" },      // 3
        { nombre: "miranda"   , especie: "conejo" },    // 4
        { nombre: "lucas"     , especie: "conejo" },    // 5
        { nombre: "Horacia"   , especie: "tortuga" }    // 6
        ];

const newArray = animalitos.filter((element, index, list) => {
    return element.especie === 'conejo'
})

console.log(newArray)

/*
1. Escribe una funcion que tome una cadena de palabras en minusculas y la regrese en mayusculas.
		Entrada: ["hola","como","estas"]
        Salida: ["HOLA","COMO","ESTAS"]

2. Crea una funcion que reciba como parametro una cadena de palabras y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.
		Entrada:["Hola amigos", "cinta roja cdmx y gdl"," yei" ]
		Salida:["HOLA amigos", "CINTA roja CDMX y GDL","YEI"]
3. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], y agarrar sólo las que son mayores a dos horas (hacer la comparación en horas)
4.- A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30
*/

