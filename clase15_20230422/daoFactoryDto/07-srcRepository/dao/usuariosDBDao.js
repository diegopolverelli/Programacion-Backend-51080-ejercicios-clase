import mongoose from "mongoose";
import { usuariosModelo } from "./models/usuarios.modelo.js";
import { config } from "../config/config.js";
// import { UsuariosDto } from "../dto/usuariosDto.js";

export class UsuariosDBDao{
    constructor(){
        this.connection=mongoose.connect(config.database.MONGOURL,{dbName:config.database.DB})
                                    .then(conn=>console.log('Conectado a la DB...!!!'))
    }

    async get(){
        return await usuariosModelo.find();
    }

    async save(usuario){
        return await usuariosModelo.create(usuario);
    }
}

