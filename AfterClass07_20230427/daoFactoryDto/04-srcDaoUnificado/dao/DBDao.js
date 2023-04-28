import mongoose from "mongoose";
import { config } from "../config/config.js";
import { juguetesModelo } from "./models/juguetes.modelo.js";
import { usuariosModelo } from "./models/usuarios.modelo.js";


export class DBDao{
    constructor(){
        this.connection=mongoose.connect(config.database.MONGOURL,{dbName:config.database.DB})
        .then(conn=>console.log('Conectado a la DB...!!!'))

        this.colecciones={
            usuarios: usuariosModelo,
            juguetes: juguetesModelo
        }
    }

    async get(coleccion){
        if(!this.colecciones[coleccion]) throw new Error(`No existe la coleccion ${coleccion}`)

        return await this.colecciones[coleccion].find()
    }

    async save(coleccion, aGrabar){
        if(!this.colecciones[coleccion]) throw new Error(`No existe la coleccion ${coleccion}`)

        return await this.colecciones[coleccion].create(aGrabar)
    }


}