import __dirname from './utils/utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import mongoose from 'mongoose';

const PORT=3000;

const app=express();

// app.engine('.hbs', engine({extname: '.hbs'}));
// app.set('view engine', '.hbs');
// app.set('views', './views');

app.engine('.hbs', engine({
    extname: '.hbs',
    // runtimeOptions: {
    //     allowProtoPropertiesByDefault: true,
    //     allowProtoMethodsByDefault: true,
    // },
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'../views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const heroeModelo=mongoose.model('heroes',new mongoose.Schema({
    nombre:{unique: true, type: String}, poder: String, empresa: String
}))

app.get('/',async(req,res)=>{

    // .lean() transforma el resultado del find (que por defecto devuelve instancias de mongoose), en 
    // objetos planos de JavaScript
    // let heroes=await heroeModelo.find().lean()

    let heroes=await heroeModelo.find()
    if(heroes.length==0){
        console.log(heroes)
        let CreaHeroes=[
            {
                nombre:'Ironman', poder:'Inteligencia, valor', empresa:'Marvel'
            },
            {
                nombre:'Hulk', poder:'Fuerza', empresa:'Marvel'
            },
            {
                nombre:'Batman', poder:'Inteligencia, valor', empresa:'DC'
            },
            {
                nombre:'Capitana Marvel', poder:'Fuerza', empresa:'Marvel'
            },
        ]
        await heroeModelo.insertMany(CreaHeroes)
        heroes=await heroeModelo.find()
    }


    // console.log(heroes)

    // console.log(heroes[0])
    // console.log(Object.keys(heroes[0]))
    // console.log(Object.keys(heroes[0].toJSON()))
    // console.log(Object.keys(heroes[0].toObject()))
    
    // console.log(heroes[0], heroes[0].toJSON(), heroes[0].toObject())

    heroes=heroes.map(heroe=>heroe.toJSON())

    res.setHeader('Content-Type','text/html');
    res.status(200).render('home',{heroes});
})

app.get('/datos',(req,res)=>{
    res.render('datos')
})

app.get('/contacto',(req,res)=>{
    res.render('contacto')
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const conectar=async()=>{
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=afterClass10')
        console.log(`Conexión a DB establecida`)
    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err}`)
    }
}

conectar();

server.on('error',(error)=>console.log(error));