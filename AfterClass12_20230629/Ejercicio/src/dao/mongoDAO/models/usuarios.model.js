import mongoose from "mongoose";

const conectar=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/pruebas_mongo')
        console.log(`Conexión a DB establecida`)
    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: err`)
    }
}
conectar();

const usuariosColeccion='usuarios'
const usuariosSchema=new mongoose.Schema(
    {
        nombre:String,
        email:String
    },
    {
        timestamps:true
    }
)

export const usuariosModelo=mongoose.model(usuariosColeccion, usuariosSchema)