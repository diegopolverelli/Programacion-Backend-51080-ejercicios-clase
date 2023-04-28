import mongoose from 'mongoose'

const usuariosColeccion='usuarios'
const usuariosEsquema=new mongoose.Schema({
    nombre: String, apellido: String, nombreCompleto: String, activo: Boolean
})

export const usuariosModelo=mongoose.model(usuariosColeccion,usuariosEsquema)