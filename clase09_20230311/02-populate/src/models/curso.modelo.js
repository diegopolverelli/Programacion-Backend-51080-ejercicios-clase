import mongoose from 'mongoose'

const cursoCol='cursos';

const cursoEsq=new mongoose.Schema({
    codigo:Number,
    nombre:String,
    horasPorSemana:Number,
    temas:{
        type:Array, default:[]
    }
});

export const cursoModelo=mongoose.model(cursoCol,cursoEsq);
