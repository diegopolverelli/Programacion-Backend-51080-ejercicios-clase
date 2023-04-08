import dotenv from 'dotenv';
import {Command} from 'commander'

const programa=new Command()

programa.option('-p, --prod' ,'Activa el modo producción',false)

programa.parse()

let opciones=programa.opts();
console.log(opciones)



dotenv.config({
    override:true, path: opciones.prod?'./.env.production':'./.env'
})

export const config={
    PORT:process.env.PORT,
    SECRET:process.env.SECRET,
    USERNAME:process.env.USERNAME
}
