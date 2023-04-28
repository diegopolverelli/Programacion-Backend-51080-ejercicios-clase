import express from 'express';
import { config } from './config/config.js';
import { UsuariosMemoryDao } from './dao/usuariosMemoryDao.js';
import { UsuariosDBDao } from './dao/usuariosDBDao.js';
import { UsuariosDto } from './dto/usuariosDto.js';
const PORT=config.app.PORT;

const app=express();

// const dao=new UsuariosMemoryDao()
const dao=new UsuariosDBDao()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/usuarios',async(req,res)=>{

    let usuarios=await dao.get()

    res.setHeader('Content-Type','application/json');
    res.status(200).json(usuarios);
})

app.post('/usuarios',async(req,res)=>{

    // faltarían las validaciones... 

    let usuarioGuardado=await dao.save(new UsuariosDto(req.body)) 

    res.setHeader('Content-Type','application/json');
    res.status(200).json(usuarioGuardado);
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));