import mongoose from "mongoose";
import { config } from "../config/config.js";
import { juguetesDef } from "./models/juguetes.modelo.js";
import { usuariosDef } from "./models/usuarios.modelo.js";
import { DB } from "./singleton.js";
// import { juguetesModelo } from "./models/juguetes.modelo.js";
// import { usuariosModelo } from "./models/usuarios.modelo.js";

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

        const timestamps={timestamps:{createdAt:'Fecha de Alta',updatedAt: 'Fecha última modificación'}}

        const usuariosEsquema=new mongoose.Schema(usuariosDef.esquema, timestamps)
        const juguetesEsquema=new mongoose.Schema(juguetesDef.esquema, timestamps)

        this.colecciones={
            [usuariosDef.coleccion]: getOrCreateModel(usuariosDef.coleccion, usuariosEsquema),
            [juguetesDef.coleccion]: getOrCreateModel(juguetesDef.coleccion, juguetesEsquema )
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