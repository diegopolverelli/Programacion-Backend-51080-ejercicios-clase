import __dirname from './utils/utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import cookieParser from 'cookie-parser';

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

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser('miPalabraSecreta'));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
})

app.post('/set',(req, res)=>{
    let {nombre, email}=req.body;
    if(!nombre || !email) return res.sendStatus(400);

    res.cookie(nombre,email,{maxAge:5000}).redirect('/')
})

app.get('/get',(req,res)=>{
    let cookie=req.cookies;

    res.send(cookie);

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));