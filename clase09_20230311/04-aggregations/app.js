import mongoose from 'mongoose';

const ventasCol='ventas'

const ventasEsquema=new mongoose.Schema({
    orden:Number,
    sabor:String,
    size:String,
    precio:Number, 
    cantidad:Number,
    importe:Number, 
    sucursal:String
})

const ventasModelo=mongoose.model(ventasCol,ventasEsquema);

const env=async()=>{
    try {
        // await mongoose.connect('mongodb://localhost:27017/pruebas_indices')
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=base_clase9')
        console.log(`Conexión a DB establecida`);

        let resultado=await ventasModelo.aggregate([
            {
                $match:{size:{$in:['chica','individual']}}
            },
            {
                $match:{sucursal:{$in:['Mataderos','Castelar Norte']}}
            },
            {
                $group:{
                    _id:{
                        suc:'$sucursal',
                        sabor:'$sabor'
                    },
                    cantPromedio:{$avg:'$cantidad'},
                    cantMaxima:{$max:'$cantidad'},
                    importePromedio:{$avg:'$importe'},
                    importeTotal:{$sum:'$importe'},
                    sucursal:{$min:'$sucursal'}
                }
            },
            {
                $merge:{into:'pizzaReportes'}
            },

        ])

        console.log(resultado)

    } catch (error) {
        console.log(`Error en la app: ${error}`);
    }
}

env()