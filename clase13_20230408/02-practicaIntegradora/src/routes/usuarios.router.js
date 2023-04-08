import { usuarioModelo } from "../models/usuarios.modelo.js";
import { MiRouter } from "./router.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from "../config/config.js";

export class UsuariosRouter extends MiRouter{
    init(){
        this.post('/login',['PUBLIC'],async(req,res)=>{

            // res.success('OK...!!!')
            let {username, password} = req.body
            if(!username || !password) return res.errorCliente('Faltan datos')

            let usuario=await usuarioModelo.findOne({username:username})

            if(!usuario) return res.errorAutenticacion(`No existe el usuario ${username} en BD`)

            if(!bcrypt.compareSync(password, usuario.password)) return res.errorAutenticacion(`Clave invalida`)

            let token=jwt.sign({usuario},config.SECRET,{expiresIn:60*30})

            res.cookie('codertoken',token,{maxAge:1000*60*30, httpOnly:true}).success2('Login OK',token)

        })
    }
}