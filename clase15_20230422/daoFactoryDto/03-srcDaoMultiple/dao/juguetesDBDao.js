import mongoose from "mongoose";
import { juguetesModelo } from "./models/juguetes.modelo.js";
import { config } from "../config/config.js";
import { DB } from "./singleton.js";

export class JuguetesDBDao{
    constructor(){
        // this.connection=mongoose.connect(config.database.MONGOURL,{dbName:config.database.DB})
        //                             .then(conn=>console.log('Conectado a la DB...!!!'))
            this.connection=DB.conectar()
    }

    async get(){
        return await juguetesModelo.find();
    }

    async save(juguete){
        return await juguetesModelo.create(juguete);
    }
}

