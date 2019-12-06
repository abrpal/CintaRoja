Objetos Literales
/*
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
*/

const myPenguin = {
    character: 'Whiteblack',
    origin: 'Whiteblack the Penguin Sees the World',
    author: 'H. A. Rey and Margret Rey',
    notes: 'Children\'s book about a travelling penguin'
};

/*
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
*/

console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`);

/*
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
*/

myPenguin.puedeVolar = false;

/*
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.
*/

myPenguin.graznar = function(){
    return 'kaww kaww!!';
};

/*
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.
*/

myPenguin.saludar = function(){
    return `Hola, soy un pingüino y mi nombre es ${this.character}`;
}


/*
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
    "Señor Pingu" y llama al método "saludar" para verificar que 
    se ha aplicado el cambio correctamente.
*/

myPenguin.character = 'Señor Pingu';

/*
7.- Escribe otro método llamado 'volar'. Con este método imprime en 
    consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
    en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
    "No puedo volar :(" 
*/

myPenguin.volar = function(){
    if(this.puedeVolar){
        return 'Puedo volar!';
    } else {
        return 'No puedo volar :(';
    }
}

/*
8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
    llamar el método 'volar' para verificar que el cambio se efectuó
    correctamente.
*/

myPenguin.puedeVolar = true;
myPenguin.volar();

/*
9.- Crea un objeto que contenga información de una receta 
    para preparar Mole. Debe contener las propiedades de
    título (string), porciones (numero) e ingredientes (un
    arreglo de strings). Muestra la información de la receta
    para que luzca así:
    Mole
    Porciones: 2
    Ingredientes:
    canela
    comino
    cocoa
*/

const recetaDeMole = {
    titulo: 'Mole',
    porciones: 2,
    Ingredientes: '\ncanela \ncomino \ncocoa',

    mostrarReceta: function(){
        console.log(this.titulo);
        console.log(`Porciones: ${this.porciones}`);
        console.log(`Ingredientes: ${this.Ingredientes}`);
    }
}


/*
10.- Crea un arreglo de objetos, donde cada objeto describa 
    un libro y tenga las propiedades para titulo(string),
    autor(string) y leido(booleano para indicar si se ha 
    leido o no). Itera sobre el arreglo de libros, y por 
    cada libro imprime el titulo y autor, junto con su 
    status de lectura (si ya ha sido leído, o no).
*/

class Libro{
    constructor(titulo, autor, leido){
        this.titulo = titulo;
        this.autor = autor;
        this.leido = leido;
    }
}

const libro1 = new Libro('harry potter','autor1', true )
const libro2 = new Libro('titulo 2','autor 2', false )
const libro3 = new Libro('titulo 3','autor 3', true )

let libros = [libro1, libro2, libro3]

for(let i = 0; i < libros.length ; i++){
    console.log(libros[i].titulo);
    console.log(libros[i].autor);
    console.log(libros[i].leido);
}


/*
Objetos:  
11.- Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura
	 Generar el RFC a partir de el nombre, edad y sexo
*/


class Persona{
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    RFC = 'rfc';

    calcularIMC(){
        return (this.peso * 10000) / (this.altura * this.altura);
    }

    esMayorDeEdad(){
        return this.edad >= 18;
    }
}

const persona1 = new Persona('Mi nombre', 29, 'Masculino', 69, 182);


/*
     12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	 -Titular y cantidad, estado 
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
     Como regla de negocio no debe de tener más de $900 y menos de $10
     
     */

class Cuenta{
    constructor(titular, cantidad, estado){
        this.titular = titular;
        this.estado = estado;

        if(cantidad >= 10 && cantidad <= 900)
        {
            this.cantidad = cantidad;
        }
    }


    ingresar(cantidad){
        if ((this.cantidad + cantidad) <= 900){
            this.cantidad += cantidad;
        }
        else{
            console.log("La cuenta no debe tener mas de 900.")
        }

    }

    retirar(cantidad){
        if ((this.cantidad - cantidad) >= 10){
            this.cantidad -= cantidad;
        }
        else{
            console.log("La cuenta no debe tener menos de 10.")
        }
    }
}

const cuenta1 = new Cuenta('Yo', 400, 'Jalisco');
