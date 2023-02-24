// const express=require('express');
import express from 'express';
const PORT=3000;

import { Server } from 'socket.io';
import { router as routerHeroes } from './routes/heroes.router.js';

// const Server=require('socket.io').Server;
import { engine} from 'express-handlebars';
import { router as routerVistas} from './routes/vistas.router.js';



const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('./src/public'));

// app.get('/',(req,res)=>{
//     res.setHeader('Content-Type','text/plain');
//     res.status(200).send('OK');
// })

app.use('/api/heroes',(req, res, next)=>{
    req.serverSocket=io;
    next();
},routerHeroes);

app.use('/',routerVistas);

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const io=new Server(server); 

// global.io=new Server(server);

let temperatura=27;
let flag=0;
setInterval(() => {
    // sensor midiendo algo... una lógica y códigos importantes... ta ta ta... y dispara el emit al final...
    // logica que uno requiera para su app... todo lo simple o compleja que sea...
    let aleatorio=Math.random();
    flag++;
    if(flag<=3){
        temperatura+=aleatorio;
    }else{
        temperatura-=aleatorio;
        if(flag>6){
            flag=0;
        }
    }
    io.emit('lecturaTemperatura',temperatura.toFixed(2));
}, 1500);

server.on('error',(error)=>console.log(error));

