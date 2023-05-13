import express from 'express';
import cluster from 'cluster'
import os from 'os'

const numeroDeCpus = os.cpus().length

if (cluster.isPrimary) {
    console.log(`Soy el proceso primario, tengo id: ${process.pid}`)

    for (let i = 0; i < numeroDeCpus; i++) {
        cluster.fork()
    }

    cluster.on('exit',(worker)=>{
        console.log(`EL proceso worker ${worker.process.pid} ha finalizado. El proceso primario procederá a crear otro nodo`)
        cluster.fork()
    })

    cluster.on('message',(worker, message)=>{
        console.log(`EL proceso worker ${worker.process.pid} ha enviado este mensaje: ${message}`)
    })


} else {
    console.log(`Soy un proceso worker, tengo id: ${process.pid}`)

    const PORT = 3000;

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/simple', (req, res) => {

        console.log(`Proceso ${process.pid} atendiendo el endpoint /simple`)

        process.send('Hola...!!! estoy resolviendo una operacion simple...!!!')  

        let resultado = 0
        for (let i = 0; i <= 1_000_000; i++) {
            resultado += i
        }

        console.log(resultado)

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({ resultado });
    })

    app.get('/complejo', (req, res) => {


        console.log(`Proceso ${process.pid} atendiendo el endpoint /complejo`)


        let resultado = 0
        for (let i = 0; i <= 5_000_000_000; i++) {
            resultado += i
        }

        console.log(resultado)

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({ resultado });
    })


    const server = app.listen(PORT, () => {
        console.log(`Server escuchando en puerto ${PORT}`);
    });

    server.on('error', (error) => console.log(error));

}


