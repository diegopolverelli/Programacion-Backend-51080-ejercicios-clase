import express from 'express'
import {fork} from 'child_process'

const app=express();

let visitas=0;
app.get('/',(req,res)=>{
    visitas++;
    res.send(`Visitas al endpoint: ${visitas}`)
})

const calculo=()=>{
    let resultado=0;

    for(let i=1;i<20_000_000_000;i++){
        resultado+=i
    }

    return resultado
}

app.get('/calculo-bloq',(req,res)=>{
    let resultado=calculo();
    res.send(`El resultado es: ${resultado}`)
})

app.get('/calculo-nobloq',(req,res)=>{
    // let resultado=calculo();
    let child=fork('./calculoPesado.js');
    child.send('Comienza a ejecutar');
    child.on('message',(resultado)=>{
        res.send(`El resultado es: ${resultado}`)
    })
})




app.listen(3000,()=>{
    console.log(`Server escuchando puerto 3000`)
})