
export class MemoryDAO{
    constructor(){
        this.colecciones={
            juguetes:[],
            usuarios:[]
        }
    }

    get(coleccion){
        if(!this.colecciones[coleccion]) throw new Error(`No existe la coleccion ${coleccion}`)

        return this.colecciones[coleccion]  
    }

    post(coleccion, aGrabar){
        if(!this.colecciones[coleccion]) throw new Error(`No existe la coleccion ${coleccion}`)

        if(this.colecciones[coleccion].length==0){
            aGrabar.id=1;
        }else{
            let lastIndex=this.colecciones[coleccion].length-1
            let id=this.colecciones[coleccion][lastIndex].id;
            aGrabar.id=id+1
        }

        this.colecciones[coleccion].push(aGrabar)
        return aGrabar
    }

}