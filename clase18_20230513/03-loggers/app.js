import express from 'express';
import { logger, logger2, middLogger } from './utils.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(middLogger);

logger2.errortonto('Prueba con el logger 2, con niveles personalizados: nivel mas bajo')
logger2.critico('Prueba con el logger 2, con niveles personalizados: nivel mas alto')
logger2.log('intermedio','Prueba con el logger 2, nivel intermedio...!!!')
logger2.intermedio('Prueba con el logger 2, nivel intermedio...!!!')

logger.error(`Este es un mensaje de error`)
logger.warn(`Este es un mensaje de warning`)
logger.info(`Este es un mensaje de información`)
logger.http(`Este es un mensaje de http`)
logger.verbose(`Este es un mensaje de verbose`)
logger.debug(`Este es un mensaje de debug`)
logger.silly(`Este es un mensaje tipo silly`)


app.get('/',(req,res)=>{

    // logger.error(`Este es un mensaje de error, dentro de un endpoint`)

    req.logger.error(`Este es un mensaje de error, dentro de un endpoint`)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));