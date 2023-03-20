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
                group:'1A'
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