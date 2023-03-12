import {Schema, model} from 'mongoose';

const usuariosColeccion='usuarios';

const usuariosEsquema = new Schema({
    codigo: {
        type:Number, index:true
    },
    nombre: String,
    apellido: String,
    email: String,
    estudios: String,
    origen: String,
    edad: Number,
    ingresoAnualPromedio: Number 
},{collection:'usuariosBig'})

export const usuariosModelo=model(usuariosColeccion, usuariosEsquema);