const lista = [{nombre: "nombra", edad: 28},
{nombre: "nombre", edad: 24},
{nombre: "nombri", edad: 25},
{nombre: "nombro", edad: 26},
{nombre: "nombru", edad: 27},]

const listaNombre = lista.map((contenido, index, lista) => contenido.nombre)    //itera y hace push en una sola linea
console.log(listaNombre)

/*
----------------------------------------------------------------
                          Map
    2.- A partir del siguiente arreglo de mascotas:
    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];
    Genera un nuevo arreglo que contenga los nombres de todas 
    las mascotas. */

    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];

    const newArray = mascotas.map((element, index, list) => {
        return element.nombre
    })

    console.log(newArray)
