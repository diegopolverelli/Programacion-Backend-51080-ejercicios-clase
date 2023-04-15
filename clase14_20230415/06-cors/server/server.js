import express from 'express';
import cors from 'cors';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// let configCors={
//     origin:['']
// }

app.use(cors());

app.get('/test',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK test 1...');
})

app.get('/test2',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK test 2...');
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));