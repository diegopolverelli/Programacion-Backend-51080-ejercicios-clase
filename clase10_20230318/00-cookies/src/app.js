import express from 'express';
import cookieParser from 'cookie-parser'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser("miPalabraSecreta"));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

let info={
    tema:'verde', id:109
}

app.get('/set',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.cookie('miCookie01','valor de la cookie',{})
    res.cookie('miCookie02',info,{maxAge:1000*60*60*24*10})
    res.cookie('miCookie03','valor de la cookie',{signed:true})
    .status(200).send('OK');
})

app.get('/get',(req,res)=>{

    let cookiesSinFirmar=req.cookies;
    let cookiesFirmadas=req.signedCookies;

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        cookiesSinFirmar, cookiesFirmadas
    });
})

app.get('/del',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.clearCookie('miCookie01')
    res.clearCookie('miCookie03')
    .status(200).send('OK');
})



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));