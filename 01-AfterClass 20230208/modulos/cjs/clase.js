class Clase1{
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

module.exports={
    Clase1,
    usuarios
}