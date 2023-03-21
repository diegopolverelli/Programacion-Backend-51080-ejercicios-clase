import express from 'express';
import mongoose from "mongoose";

const app=express();

const server=app.listen(3000,()=>{
    console.log('Server escuchando el puerdo 3000...!!!')
});


const estudiantesCol = 'estudiantes'

const estudiantesEsquema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String,
})

const estudiantesModelo = mongoose.model(estudiantesCol, estudiantesEsquema);



app.get('/',async(req,res)=>{
    let resultado=await estudiantesModelo.aggregate([
        {
            $match:{
                group:'2B'
            }
        },
        {
            $group:{
                _id:'Segundo B',
                notaPromedio:{$avg:'$grade'},
                detalle:{
                    $push:{
                        nombreCompleto: {$concat:['$first_name',' ','$last_name']},
                        nota:'$grade'
                    }
                }
            }
        }
    ])

    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})



// Cantidad de aprobados (nota superior o igual a 7), nota promedio de los aprobados, 
// y detalle de alumnos aprobados
app.get('/1',async(req,res)=>{
    let resultado=await estudiantesModelo.aggregate([
        {
            $match:{
                grade:{$gte:7}
            }
        },
        {
            $group: {
                _id: 'Aprobados',
                notaPromedio: {$avg:'$grade'},
                cantidadAprobados: {$count:{}},
                detalle: {
                    $push:{
                        nombreCompleto: {
                            $concat:['$first_name',' ','$last_name']
                        },
                        nota: '$grade'
                    }
                }
            }
        },
        // {
        //     $project:{
        //         titulo:'Cantidad alumnos con nota mayor o igual a 7',
        //         cantidad: '$last_name'
        //     }
        // }
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