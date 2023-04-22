
export class JuguetesMemoryDao{
    constructor(){
        this.juguetes=[]
    }

    get(){
        return this.juguetes
    }

    save(juguete){

        // definir el id:
        if(this.juguetes.length==0){
            juguete.id=1
        }else{
            let lastId=this.juguetes[this.juguetes.length-1].id
            juguete.id=lastId+1
        }

        this.juguetes.push(juguete)

        return juguete

    }

}