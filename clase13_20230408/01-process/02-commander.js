import {Command, Option} from 'commander';
import express from 'express'

const app=express()

const programa=new Command();

programa
    .option('-p, --port <port>','Puerto donde estará escuchando el servidor',3000)
    .option('-d, --debug', 'Activa el modo debug',false)
    .allowUnknownOption(true)
    .requiredOption('-u, --user <usuario>','Usuario que ejecuta el Scrip')
    .option('-D, --datos <datos...>','Datos para proceso')
    .addOption(new Option('-m, --mode <mode>','Modo de ejecución produccion / desarrollo').choices(['PROD','DEV']).conflicts('debug'))
    


programa.parse();

let opciones=programa.opts();

console.log('Opciones esperadas: ',opciones)
console.log('Opciones no esperadas: ', programa.args)

console.log(`El usuario es ${opciones.user}`)

app.listen(opciones.port,()=>console.log(`Server escuchando el puerto ${opciones.port}`))