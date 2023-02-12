export default class Clase1{
    constructor(nombre, apellido){
        this.nombre=nombre,
        this.apellido=apellido
    }

    get datos(){
        return `${this.nombre} ${this.apellido}`
    }
}

