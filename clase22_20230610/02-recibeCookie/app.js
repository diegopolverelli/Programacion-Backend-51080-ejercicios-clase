import express from 'express';
import cookieParser from 'cookie-parser';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get('/',(req,res)=>{

    let cookies=req.cookies;
    let headers=req.headers;

    console.log({cookies, headers})

    res.setHeader('Content-Type','application/json');
    res.status(200).json({status:'success', cookies, headers});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));