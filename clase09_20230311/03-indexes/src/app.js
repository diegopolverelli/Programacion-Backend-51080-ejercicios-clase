import express from 'express';
import mongoose from 'mongoose';

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
    } catch (error) {
        console.log(error);
    }
}

env();

server.on('error',(error)=>console.log(error));