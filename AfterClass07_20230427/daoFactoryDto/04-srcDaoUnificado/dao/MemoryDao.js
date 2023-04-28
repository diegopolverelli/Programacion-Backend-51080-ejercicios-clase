
export class MemoryDao{
    constructor(){

        this.colecciones={
            usuarios:[],
            juguetes:[]
        }
    }

    get(coleccion){
        if(!this.colecciones[coleccion]) throw new Error(`No existe la coleccion ${coleccion}`)

        return this.colecciones[coleccion]
    }

    save(coleccion, aGrabar){

        // definir el id:
        if(this.colecciones[coleccion].length==0){
            aGrabar.id=1
        }else{
            let lastId=this.colecciones[coleccion][this.colecciones[coleccion].length-1].id
            aGrabar.id=lastId+1
        }

        this.colecciones[coleccion].push(aGrabar)

        return aGrabar

    }
}