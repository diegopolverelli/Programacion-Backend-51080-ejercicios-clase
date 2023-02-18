const express=require('express');
const PORT=3000;

const engine=require('express-handlebars').engine;

const misMiddlewares=require('./middlewares/misMiddlewares');


const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const usuariosRouter=require('./routes/usuarios.router')
const mascotasRouter=require('./routes/mascotas.router')
const vistasRouter=require('./routes/vistas.router')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// const m1=(req, res, next)=>{
    
    // }
app.use(misMiddlewares.midd1);

app.use('/',vistasRouter);

app.use(express.static(__dirname+'/public'));

// app.get('/',(req,res)=>{
    //     res.setHeader('Content-Type','text/plain');
    //     res.status(200).send('OK');
    // })
    
// app.get('/api/usuarios',(req,res)=>{
    //     res.setHeader('Content-Type','text/plain');
    //     res.status(200).send('OK Usurios');
    
    // });

app.use('/api/usuarios',usuariosRouter);
app.use('/api/mascotas',misMiddlewares.midd3,mascotasRouter);



// -------------------------
// -------------------------

let frase='Frase inicial';
let fraseArray=frase.split(' ');

app.get('/api/frase',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        frase
    });
});

app.get('/api/palabras/:pos',(req,res)=>{
    
    let pos=req.params.pos;
    // console.log(fraseArray);
    
    console.log("otros">4);
    console.log(typeof "otros">4);

    console.log('parse int: ',parseInt(pos));
    

    if (isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`La posicion debe ser un número entero entre 1 y ${fraseArray.length}`
        });
    }

    if(pos<1 || pos>fraseArray.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`La posicion debe estar entre 1 y ${fraseArray.length}`
        });
    
    }

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        posSocilitada: pos,
        palabra:fraseArray[pos-1]
    });
});


app.post('/api/palabras',(req,res)=>{
    let palabra=req.body.palabra;
    if(!palabra){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`Debe enviar un campo 'palabra' en el body`
        });
    
    }

    fraseArray.push(palabra);
    frase=fraseArray.join(' ');

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        palabraInsertadaEnPosicion: fraseArray.length,
        frase
    });
})

app.put('/api/palabras/:pos',(req,res)=>{
    
    let pos=req.params.pos;
    if(pos<1 || pos>fraseArray.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`La posicion debe estar entre 1 y ${fraseArray.length}`
        });
    }

    let palabra=req.body.palabra;
    if(!palabra){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`Debe enviar un campo 'palabra' en el body`
        });
    }

    let vieja=fraseArray[pos-1];
    fraseArray[pos-1]=palabra;
    frase=fraseArray.join(' ');

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        posReemplazada:pos,
        palabraReemplazada:vieja,
        frase
    });
});

app.delete('/api/palabras/:pos',(req,res)=>{
    
    let pos=req.params.pos;
    if(pos<1 || pos>fraseArray.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`La posicion debe estar entre 1 y ${fraseArray.length}`
        });
    }

    let vieja=fraseArray[pos-1];
    fraseArray.splice(pos-1,1);
    frase=fraseArray.join(' ');

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        posEliminada:pos,
        palabraEliminada:vieja,
        frase
    });
});

app.use(misMiddlewares.middErrores);

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));