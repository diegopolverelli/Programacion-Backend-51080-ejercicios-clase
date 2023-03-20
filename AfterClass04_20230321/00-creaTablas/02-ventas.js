import express from 'express';
import mongoose from "mongoose";

const app=express();

const server=app.listen(3000,()=>{
    console.log('Server escuchando el puerdo 3000...!!!')
});


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


app.get('/',async(req,res)=>{
    let resultado=await ventasModelo.aggregate([
        {
            $match:{
                sabor:{$in:['Muzza','Calabresa','Huevo']}
            }
        }
    ])

    res.setHeader('Content-Type','application/json');
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