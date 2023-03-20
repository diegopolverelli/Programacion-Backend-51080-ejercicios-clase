import express from 'express';
import mongoose from "mongoose";

const app=express();

const server=app.listen(3000,()=>{
    console.log('Server escuchando el puerdo 3000...!!!')
});


const gastosColeccion='gastos';
const gastosEsquema=new mongoose.Schema({
    nombre:String, 
    apellido: String,
    ciudad: String, 
    zona: String,
    gastos:[
        {
            periodo:String,
            importe:Number,
            conceptos:[
                {
                    codigo:Number,
                    descrip:String,
                    importe:Number
                }
            ]
        }
    ]
});

const gastosModelo=mongoose.model(gastosColeccion, gastosEsquema);

app.get('/',async(req,res)=>{
    let resultado=await gastosModelo.aggregate([
        {
            $match:{zona:'Oeste'}
        },
        // {
        //     $unwind: '$gastos'
        // },
        // {
        //     $unwind: '$gastos.conceptos'
        // },
        // {
        //     $group:{
        //         _id:{
        //             periodo:'$gastos.periodo',
        //             concepto: '$gastos.conceptos.descrip', 
        //         },
        //         importe:{$sum:'$gastos.conceptos.importe'},
        //         detalle: {$push:{
        //             apellido:'$apellido',zona:'$zona',descrip:'$gastos.conceptos.descrip', 
        //             importe: '$gastos.conceptos.importe'
        //         }}
        //     }
        // },
        // {
        //     $sort:{_id:1, concepto:1}
        // },
        // {
        //     $project:{
        //         _id:0,
        //         zona:'Oeste',
        //         periodo:'$_id.periodo',
        //         concepto: '$_id.concepto', 
        //         importe: '$importe',
        //     }
        // },
        // {
        //     $merge:{
        //         into:'resultadoGastos'
        //     }
        // }

    ])

    res.json({resultado})

    // console.log(JSON.stringify(resultado,null,5))

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