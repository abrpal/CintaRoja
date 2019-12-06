

const ayudanteDeSanta = {
    ojos: 2,
    patas: 4,
    nombre: 'Ayudante de santa',
    raza: 'Galgo',
    ladrar: function (){
        return 'guau guau';
    },
    comer: function(comida){
        if(comida === 'Croquetas'){
            return 'fuchi guacala'
        } else {
            return 'yomi yomi'
        }
    }
}

const snoopy = {
    ojos: 2,
    patas: 4,
    nombre: 'Snoopy',
    raza: 'Beagle',
    ladrar: function (){
        return 'guau guau';
    },
    comer: function(comida){
        if(comida === 'Croquetas'){
            return 'fuchi guacala'
        } else {
            return 'yomi yomi'
        }
    }  
}

console.log(ayudanteDeSanta.raza)
console.log(snoopy.raza)


