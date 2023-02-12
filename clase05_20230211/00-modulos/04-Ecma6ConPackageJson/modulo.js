export default class SerHumano{
    constructor(nombre, apellido){
        this.nombre=nombre,
        this.apellido=apellido
    }

    get datos(){
        return `${this.nombre} ${this.apellido}`
    }
}

