import mongoose from 'mongoose'

const juguetesColeccion='juguetes'
const juguetesEsquema=new mongoose.Schema({
    nombre: String, apellido: String
})

export const juguetesModelo=mongoose.model(juguetesColeccion,juguetesEsquema)