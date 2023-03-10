// generar mi variable __dirname:
import __dirname from './utils/utils.js';
// importo modulo nativo de Node, path. Para configurar rutas absolutas (por sobre rutas relativas)
import path from 'path';
// importo express
import express from 'express';
// importo el motor de planitillas desde express-handlebars
import {engine} from 'express-handlebars';
// importo mi librería mongoose (ODM)
import mongoose from 'mongoose';

// importo mis routers (si existen...)
import { router as heroesRouter } from './routes/heroes.router.js';

// defino el puerto donde va a estar recibiendo (o escuchando) peticiones mi server express
const PORT=3000;

// defino o inicializo mi app de express
const app=express();

// Configurar mi motor de plantilla (parte código, falta la parte de carpetas)
// inicializo el motor que importé más arriba
app.engine('handlebars', engine());
// le indico a mi app (mi server), que utilice handlebars como motor de vistas
app.set('view engine', 'handlebars');
// le indico la carpeta donde estarán guardadas mis vistas
app.set('views', path.join(__dirname,'../views'));

// defino middlewares para parseo de la información que me llega en el body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// le indico a mi servidor donde va a alojarse mi contenido estático
app.use(express.static(path.join(__dirname,'../public')));

// Defino mis rutas

app.use('/api/heroes',heroesRouter);

// app.get('/',(req,res)=>{
//     res.setHeader('Content-Type','text/plain');
//     res.status(200).send('OK');
// })

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('vista01',{
        estilos:'styles.css'
    });
})

// pongo mi servidor express a escuchar peticiones en el puerto definido más arriba
const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


const conectar=async()=>{
    try {
        
        // acceso a servidor local:
        // await mongoose.connect('mongodb://127.0.0.1:27017/pruebas_mongo')

        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=base_pruebas')
        console.log(`Conexión a DB establecida`)
    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err}`)
    }
}

conectar();


// pongo mi server a escuchar eventos de tipo error, por si llegasen a darse
server.on('error',(error)=>console.log(error));