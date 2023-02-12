// ver final del archivo, donde se muestra como realizar la exportación

class SerHumano{
    constructor(nombre, apellido){
        this.nombre=nombre,
        this.apellido=apellido
    }

    get datos(){
        return `${this.nombre} ${this.apellido}`
    }
}

const usuarios=[
    {
        id:1,
        nombre:'Raul'
    },
    {
        id:2,
        nombre:'Vanesa'
    },
    {
        id:3,
        nombre:'Carlos'
    },
]

const suma=(a,b)=>{
    return a+b;
}

const resta=(a,b)=>{
    return a-b;
}

// exporto la clase "SerHumano", el array de objetos "usuario", y la función "suma" (no
// estoy exportando la función resta)
module.exports={
    SerHumano,
    usuarios,
    suma
}