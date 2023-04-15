import express from 'express';
const PORT=3100;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'))

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));