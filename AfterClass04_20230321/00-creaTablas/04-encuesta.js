import express from 'express';
import mongoose from "mongoose";

const app=express();

const server=app.listen(3000,()=>{
    console.log('Server escuchando el puerdo 3000...!!!')
});


const encuestaColeccion='encuesta'
const encuestaEsquema=new mongoose.Schema({
    candidato:String,
    partido:String,
    presupuesto: Number,
    datos:[
        {
            rangoEtario:String,
            votos:Number
        },
    ]
},{collection:'encuesta'})

const encuestaModelo=mongoose.model(encuestaColeccion, encuestaEsquema);

// porcentual de cada candidato, sobre el total de votos encuestados
app.get('/',async(req,res)=>{
    let resultado=await encuestaModelo.aggregate([
        {
            $unwind:'$datos'
        },
        {
            $group:{
                _id:'Informacion',
                totalVotos:{$sum:'$datos.votos'},
                detalle:{
                    $push:'$$ROOT'
                }
            }
        },
        {
            $unwind:'$detalle'
        },
        {
            $group:{
                _id:'$detalle.candidato',
                totalVotos:{$max:'$totalVotos'},
                votos:{$sum:'$detalle.datos.votos'}
            }
        },
        {
            $project:{
                candidato:'$_id',
                totalVotos:'$totalVotos',
                votos:'$votos',
                porcentual:{$multiply:[{$divide:['$votos','$totalVotos']},100]}
            }
        },
        {
            $sort:{candidato:1}
        },
        {
            $group:{
                _id:'informe',
                detalle:{
                    $push:'$$ROOT'
                }
            }
        },
        {
            $project:{
                _id:0,
                titulo:'Votos porcentuales por candidato:',
                fecha: new Date().toUTCString(),
                responsableInforme: 'alumnos afterClass04',
                informe:'$detalle'
            }
        }

    ])

    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})




const env = async () => {
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=afterClass04')
        console.log(`Conexión a DB establecida...!!!`)


    } catch (err) {
        console.log(`Error de conexión a la base de datos :( ${err}`)
    }
}


env();