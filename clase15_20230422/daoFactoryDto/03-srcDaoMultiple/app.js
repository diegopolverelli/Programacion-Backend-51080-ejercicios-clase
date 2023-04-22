import express from 'express';
import { config } from './config/config.js';
import { determinaDao } from './dao/factory.js';
// import { UsuariosMemoryDao } from './dao/usuariosMemoryDao.js';
// import { UsuariosDBDao } from './dao/usuariosDBDao.js';
const PORT=config.app.PORT;

const app=express();

// const dao=new UsuariosMemoryDao()
// const dao=new UsuariosDBDao()
let daoUsuarios;
let daoJuguetes;
const init=async()=>{
    let auxDao=await determinaDao()
    daoUsuarios=auxDao.usuarios
    daoJuguetes=auxDao.juguetes
}
init()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/usuarios',async(req,res)=>{

    let usuarios=await daoUsuarios.get()

    res.setHeader('Content-Type','application/json');
    res.status(200).json(usuarios);
})

app.post('/usuarios',async(req,res)=>{

    // faltarían las validaciones... 

    let usuarioGuardado=await daoUsuarios.save(req.body)

    res.setHeader('Content-Type','application/json');
    res.status(200).json(usuarioGuardado);
})

app.get('/juguetes',async(req,res)=>{

    let juguetes=await daoJuguetes.get()

    res.setHeader('Content-Type','application/json');
    res.status(200).json(juguetes);
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));