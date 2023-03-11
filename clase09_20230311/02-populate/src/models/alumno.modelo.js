import { Schema, model } from "mongoose";

const alumnoCol='alumnos'
const alumnoEsq= new Schema({
    nombre:String, apellido: String,
    dni:Number,
    origen:String,
    cursando:{
        type:[
            {
                curso:{
                    type:Schema.Types.ObjectId,
                    ref:'cursos'
                }
            }
        ]
    }
});

alumnoEsq.pre('find',function(){
    this.populate('cursando.curso')
})

export const alumnoModelo=model(alumnoCol, alumnoEsq);