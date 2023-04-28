import mongoose from "mongoose";
import { config } from "../config/config.js";

export class DB{
    static #coneccion;
    constructor(){
        mongoose.connect(config.database.MONGOURL,{dbName:config.database.DB})
                                    .then(conn=>console.log('Conectado a la DB...!!!'))
    }

    static conectar(){
        if(DB.#coneccion){
            // console.log('Coneccion previamente establecida...!!!')
            return DB.#coneccion
        }else{
            DB.#coneccion=new DB()
            return DB.#coneccion
        }
    }
}