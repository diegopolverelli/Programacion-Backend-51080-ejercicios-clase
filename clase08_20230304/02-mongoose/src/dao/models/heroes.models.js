import { Schema, model } from "mongoose";

const heroesColeccion='heroes2';

const heroesEsquema=new Schema({
    nombre: {
        type:String,
        required: true,
        unique: [true, `El nombre debe ser único en la DB`]
    },
    poder: String,
    fuerza0a100: Number,
    fecAlt:{
        type:Date,
        default: Date.now()
    }
});

export const heroesModelo=model(heroesColeccion, heroesEsquema)
