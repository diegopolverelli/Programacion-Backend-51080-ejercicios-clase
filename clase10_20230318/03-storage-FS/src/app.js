import express from 'express';
import sessions from 'express-session'
import fileStore from 'session-file-store';

const PORT=3000;

const app=express();

const fileStorage=fileStore(sessions);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(sessions({
    secret:'miPalabraSecreta',
    resave: true,
    saveUninitialized: true,
    // cookie:{maxAge:10000}
    store:new fileStorage({
        path: './src/sesiones',
        ttl: 30, retries:0
    })
}))

const auth=(req, res, next)=>{
    console.log('en auth:',req.session);

    if(!req.session.usuario) return res.sendStatus(401);
    next();
}

app.get('/',auth,(req,res)=>{

    let informacionConfidencial='';
    if (req.session.usuario.esAdmin){
        informacionConfidencial=`Info confidencial, solo para administradore... bla bla bla...`
    }
    
    res.setHeader('Content-Type','text/plain');
    if(req.session.contador){
        req.session.contador++
        // res.send(`Hola. Ha visitado esta página en ${req.session.contador} oportunidades`);
        res.json({
            mensaje:`Hola ${req.session.usuario.nombre}. Ha visitado esta página en ${req.session.contador} oportunidades\n\n${informacionConfidencial}`,
            session:req.session
        });

    }else{
        req.session.contador=1;
        res.json({
            mensaje:`Bienvenido ${req.session.usuario.nombre}\n\n${informacionConfidencial}`,
            session:req.session
        });    
    }

})

app.get('/login',(req,res)=>{

    if(!req.query.nombre || !req.query.clave) return res.sendStatus(400);

    let nombre= req.query.nombre;
    let clave= req.query.clave;

    if(clave=='Coder123'){
        req.session.usuario={
            nombre,
            esAdmin:nombre=='Admin'?true:false
        }

        console.log('en login:',req.session);
        // res.status(200).send('Login OK');

        req.session.save((err)=>{
            if(err){
                res.sendStatus(500);
            }else{
                res.redirect('/')
            }
        });

    }else return res.sendStatus(401);

});

app.get('/logout',(req, res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.sendStatus(500);
        }else{
            res.send('Logout OK...!!!')
        }
    })
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));