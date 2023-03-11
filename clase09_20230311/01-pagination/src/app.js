import __dirname from './utils/utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import mongoose from 'mongoose';

import { router as vistasRouter } from './routes/vistas.router.js';

const PORT=3000;

const app=express();

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'../views'));

app.use('/',vistasRouter);

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const conectar=async()=>{
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/pruebas_indices')
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=base_clase9')
        console.log(`Conexión a DB establecida`)
    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err}`)
    }
}

conectar();

server.on('error',(error)=>console.log(error));