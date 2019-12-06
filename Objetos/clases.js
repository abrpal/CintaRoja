

class Perro{
    constructor(color, nombre, patas){
        this.color = color;
        this.nombre = nombre;
        this.patas = patas;
    };

    ladrar(){
        return 'guau guau'
    }

    getNombre(){
        return `El pero se llama: ${this.nombre}`;
    }
}

const perro1 = new Perro('cafe', 'ayudante de santa', 4);
const perro2 = new Perro('Blanco', 'Snoopy', 4);

console.log(perro1.ladrar())