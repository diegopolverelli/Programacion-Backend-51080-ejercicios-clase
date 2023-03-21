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
            $unwind: '$gastos'
        },
        {
            $unwind: '$gastos.conceptos'
        },
        {
            $match:{nombre: {$in:['Jimena','Micaela']}, 'gastos.conceptos.codigo':101}
        },
        {
            $group:{
                _id:'$gastos.periodo',
                importeTotal:{$sum:'$gastos.conceptos.importe'},
                detalle:{
                    $push:{
                        nombre:'$nombre',
                        ciudad:'$ciudad',
                        importe: '$gastos.conceptos.importe',
                        concepto: '$gastos.conceptos.descrip'
                    }
                }
            }
        }
    ])

    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})



// Gastos totales por periodo y concepto (por ej. total de gastos de 
// promocion para el periodo 2022-01, total de gastos de viaticos para el periodo
// 2022-01, etc)

app.get('/1',async(req,res)=>{
    let resultado=await gastosModelo.aggregate([
        {
            $match:{zona:'Oeste'}
        },
        {
            $unwind: '$gastos'
        },
        {
            $unwind: '$gastos.conceptos'
        },
        {
            $group:{
                _id:{
                    periodo:'$gastos.periodo',
                    concepto: '$gastos.conceptos.descrip', 
                },
                importe:{$sum:'$gastos.conceptos.importe'},
                detalle: {$push:{
                    apellido:'$apellido',zona:'$zona',descrip:'$gastos.conceptos.descrip', 
                    importe: '$gastos.conceptos.importe'
                }}
            }
        },
        {
            $sort:{_id:1, concepto:1}
        },
        {
            $group:{
                _id: 'ReporteGastos',
                informacion: {
                    $push:{
                        periodo: '$_id.periodo',
                        concepto:'$_id.concepto',
                        importe:'$importe'
                    }
                }

            }
        },
        {
            $project:{
                _id:0,
                titulo:'Reporte de gastos',
                zona:'Oeste',
                responsable:'Diego Polverelli',
                fecha: new Date().toUTCString(),
                informacion:'$informacion'
            }
        },
        // {
        //     $merge:{
        //         into:'resultadoGastos'
        //     }
        // }
    ])

    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})

// Total de gastos de promoción, de todos los periodos de los cuales hay informacion
app.get('/2',async(req,res)=>{
    let resultado=await gastosModelo.aggregate([
        {
            $unwind: '$gastos'
        },
        {
            $unwind: '$gastos.conceptos'
        },
        {
            $match:{'gastos.conceptos.descrip':'promocion'}
        },
        {
            $group:{
                _id:'$gastos.conceptos.descrip',
                importe:{$sum:'$gastos.conceptos.importe'}
            }
        },
        {
            $project:{
                _id:0,
                titulo:'Gastos de Promocion',
                responsable:'Diego Polverelli',
                fecha:new Date().toUTCString(),
                importe:'$importe'
            }
        }
        // {
        //     $merge:{
        //         into:'resultadoGastos'
        //     }
        // }
    ])

    res.setHeader('Content-Type','application/json');
    res.json({resultado});

})

// Todos los gastos de marzo de 2022, con apertura por concepto
app.get('/3',async(req,res)=>{
    let resultado=await gastosModelo.aggregate([
        {
            $unwind: '$gastos'
        },
        {
            $unwind: '$gastos.conceptos'
        },
        {
            $match:{'gastos.periodo':'202203'}
        },
        {
            $group:{
                _id:'$gastos.conceptos.descrip',
                importe:{$sum:'$gastos.conceptos.importe'}
            }
        },
        {
            $group:{
                _id:'Gastos Marzo 2022',
                importe:{$sum:'$importe'},
                detalle:{
                    $push:{
                        concepto:'$_id',
                        importe:'$importe'
                    }
                }
            }
        },
        {
            $project:{
                _id:0,
                titulo:'Gastos Marzo 2021',
                responsable:'Diego Polverelli',
                fecha:new Date().toUTCString(),
                importe:'$importe',
                detalle:'$detalle'
            }
        }
        // {
        //     $merge:{
        //         into:'resultadoGastos'
        //     }
        // }
    ])

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