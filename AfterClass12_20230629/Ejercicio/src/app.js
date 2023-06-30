import express from 'express';
import mongoose from 'mongoose';
import { router as usuariosRouter } from './routes/usuarios.router.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/usuarios', usuariosRouter)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));