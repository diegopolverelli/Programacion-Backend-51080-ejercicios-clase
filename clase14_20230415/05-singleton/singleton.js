import mongoose from "mongoose";

const juguetesColeccion='juguetes'
const juguetesEsquema=new mongoose.Schema({
    nombre:String, precio: Number
})

export const juguetesModelo=mongoose.model(juguetesColeccion,juguetesEsquema)

class DB{
    static #intancia;
    constructor(){
        mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase14')
            .then(resultado=>console.log("Conexión a DB OK...!!!"))
            .catch(error=>console.log(error))    
    }

    static conectaDB(){
        if(DB.#intancia){
            console.log("la conexión ya se había establecido previamente")
            return DB.#intancia
        }else{
            DB.#intancia=new DB()
            return DB.#intancia
        }
    }

    suma(a,b){
        return a+b
    }
}

DB.conectaDB()

setTimeout(() => {
    DB.conectaDB()
}, 3000);

setTimeout(() => {
    DB.conectaDB()
}, 6000);

setTimeout(async() => {
    console.log(await juguetesModelo.find())
}, 10000);
