import mongoose from "mongoose";
import { config } from "../config/config.js";
import { usuariosRef } from "./models/usuarios.modelo.js";
import { juguetesRef } from "./models/juguetes.modelo.js";
import { DB } from "./singleton.js";
// import { juguetesModelo } from "./models/juguetes.modelo.js";
// import { usuariosModelo } from "./models/usuarios.modelo.js";

// singleton
const modelos={}

const getOrCreateModel=(coleccion, esquema)=>{
    if(!modelos[coleccion]){
        modelos[coleccion]=mongoose.model(coleccion, esquema)
    }
    return modelos[coleccion]
}

export class DBDao{
    constructor(){
        // this.connection=mongoose.connect(config.database.MONGOURL,{dbName:config.database.DB})
        // .then(conn=>console.log('Conectado a la DB...!!!'))

        this.connection=DB.conectar()

        const timestamps={timestamps:{createdAt:'Fecha de alta', updatedAt:'Fecha Última Modificación'}}

        const usuariosEsquema=new mongoose.Schema(usuariosRef.esquema, timestamps)
        const juguetesEsquema=new mongoose.Schema(juguetesRef.esquema, timestamps)

        this.colecciones={
            [usuariosRef.coleccion]: getOrCreateModel(usuariosRef.coleccion, usuariosEsquema),
            [juguetesRef.coleccion]: getOrCreateModel(juguetesRef.coleccion, juguetesEsquema)
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