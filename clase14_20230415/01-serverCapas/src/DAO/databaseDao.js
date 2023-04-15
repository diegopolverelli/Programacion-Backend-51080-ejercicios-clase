import { juguetesModelo } from "./models/juguetes.model.js";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase14')
    .then(resultado=>console.log('Conectado a la DB'))
    .catch(error=>console.log(error))


export class DatabaseDAO{
    constructor(){

    }

    async get(coleccion){
        return await juguetesModelo.find() 
    }

    async post(coleccion, aGrabar){
        return await juguetesModelo.create(aGrabar)
    }

}