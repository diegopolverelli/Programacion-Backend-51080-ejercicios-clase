import express from 'express';
import { config } from './config/config.js';
import { usuariosService } from './services/index.js';
// import { UsuariosMemoryDao } from './dao/usuariosMemoryDao.js';
// import { UsuariosDBDao } from './dao/usuariosDBDao.js';
// import { UsuariosDto } from './dto/usuariosDto.js';

import { router as usuariosRouter } from './routes/usuarios.router.js';

const PORT=config.app.PORT;

const app=express();




app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/usuarios', usuariosRouter)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));