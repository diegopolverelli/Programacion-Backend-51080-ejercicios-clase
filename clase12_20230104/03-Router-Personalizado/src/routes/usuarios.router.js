import { MiRouter } from "./router.js";
import jwt from 'jsonwebtoken';


export class UsuariosRouter extends MiRouter{
    init(){
        this.get('/login',['PUBLIC'],(req,res)=>{
            let usuario={
                nombre:'Juan', rol:'usuario'
            }

            let token=jwt.sign({usuario},'miPalabraSecreta')

            res.success2(`Login correcto`,token)
        })


        this.get('/',['PUBLIC'],(req,res,next)=>{
            console.log('mid 1...')
            next();
        },(req,res)=>{
            res.success(`FUNCIONO TODO...!!!`)
        })

        this.get('/datos',['ADMIN'],(req,res)=>{
            let user={
                nombre:'Juan', edad:28
            }
            res.success2(`Mis datos...!!!`,user)
        })

        this.get('/error',['ADMIN', 'USUARIO'],(req,res)=>{
            res.errorCliente(`Error en datos...`)
        })

        this.get('/datos2',['ADMIN', 'USUARIO'],(req,res)=>{
            res.success(`Datos2 funciona OK...!!! `)
        })


        // this.post()

    }
}