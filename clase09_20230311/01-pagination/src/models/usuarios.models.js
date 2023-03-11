import {Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const usuariosColeccion='usuarios';

const usuariosEsquema = new Schema({
    codigo: Number,
    nombre: String,
    apellido: String,
    email: String,
    estudios: String,
    origen: String,
    edad: Number,
    ingresoAnualPromedio: Number 
},{collection:'usuariosBig'})

usuariosEsquema.plugin(mongoosePaginate);

export const usuariosModelo=model(usuariosColeccion, usuariosEsquema);