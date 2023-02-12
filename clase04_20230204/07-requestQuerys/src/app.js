const express = require('express')
const app = express()
const PORT=3000;

let sw=[
    {
        id:1,
        nombre:"Luke",
        ladoOscuro: "N"
    },
    {
        id:2,
        nombre:"R2D2",
        ladoOscuro: "N"
    },
    {
        id:3,
        nombre:"Darth Vader",
        ladoOscuro: "S"
    },
    {
        id:4,
        nombre:"Emperador",
        ladoOscuro: "S"
    },
    {
        id:5,
        nombre:"Han Solo",
        ladoOscuro: "N"
    },

];

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {

    let ladoOscuro=req.query.ladoOscuro;
    if(ladoOscuro){
        let filtro=sw.filter(p=>p.ladoOscuro==ladoOscuro);
        res.send(filtro);
    }else{
        res.send(sw);
    }

})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
})