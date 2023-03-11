import express from 'express';
import mongoose from 'mongoose';
import { alumnoModelo } from './models/alumno.modelo.js';
import { cursoModelo } from './models/curso.modelo.js';

import { router as pruebasRouter } from './routes/pruebas.router.js';

const PORT=3000;

const app=express();

app.use('/api/pruebas',pruebasRouter);

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const env=async()=>{
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/pruebas_indices')
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=base_clase9')
        console.log(`Conexión a servidor DB establecida...!!!`);

        // await cursoModelo.deleteMany({});
        // let resultado=await cursoModelo.create({
        //     codigo:109,
        //     nombre: 'Calculo II',
        //     horasPorSemana:8,
        //     temas:['limite','derivadas','integrales']
        // })
        // console.log(resultado);

        // await alumnoModelo.deleteMany({});
        // let resultado=await alumnoModelo.create({
        //     nombre:'Martin',
        //     apellido:'Palermo', dni:22000111,
        //     origen:'Argentina',
        //     cursando:[
        //         {
        //             curso:'640c8cefccef652b9d2f49b4'
        //         }
        //     ]
        // });
        // console.log(resultado)

    } catch (error) {
        console.log(error);
    }
}

env();

server.on('error',(error)=>console.log(error));