import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/simple',(req,res)=>{

    let resultado=0
    for(let i=0;i<=1_000_000;i++){
        resultado+=i
    }
    
    console.log(resultado)

    res.setHeader('Content-Type','application/json');
    res.status(200).send({resultado});
})

app.get('/complejo',(req,res)=>{

    let resultado=0
    for(let i=0;i<=5_000_000_000;i++){
        resultado+=i
    }
    
    console.log(resultado)

    res.setHeader('Content-Type','application/json');
    res.status(200).send({resultado});
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));