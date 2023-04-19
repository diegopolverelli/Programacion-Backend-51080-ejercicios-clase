
import passport from 'passport';
import passportJWT from 'passport-jwt';
import passportLocal from 'passport-local'
import bcrypt from 'bcrypt';

import { config } from './config.js';
import { usuarioModelo } from "../models/usuarios.modelo.js";


const extraeToken=(req)=>{
    let token=null;
    if(req.cookies.codertoken) {
        console.log('Leyo desde passport la cookie')
        token=req.cookies.codertoken;
    }

    return token
}

export const inicializaEstrategias=()=>{

    passport.use('login', new passportLocal.Strategy(
        {
            
        },
        async(username, password, done)=>{
            try {
                let usuario=await usuarioModelo.findOne({username:username})

                if(!usuario) return done(null, false) //return res.errorAutenticacion(`No existe el usuario ${username} en BD`)
    
                if(!bcrypt.compareSync(password, usuario.password)) return done(null, false) // return res.errorAutenticacion(`Clave invalida`)
    
                //acá, tengo un usuario que existe en la DB, y cuya clave en DB coincide con la ingresada... 
                // o sea, a esta algura mi usuario es válido y tengo que devolverlo

                usuario={
                    nombre:usuario.nombre, apellido:usuario.apellido, 
                    rol: usuario.rol.nombre
                }

                console.log(`Usuario ${username} validado vía Passport Middleware...!!!`)
                done(null, usuario)

            } catch (error) {
                done(error)
            }
        }
    ))

    passport.use('jwt', new passportJWT.Strategy(
        {
            jwtFromRequest: new passportJWT.ExtractJwt.fromExtractors([extraeToken]),
            secretOrKey: config.SECRET
        },
        (contenidoToken, done)=>{
            try {
                done(null,contenidoToken.usuario)
            } catch (error) {
                done(error)
            }
        }
    ))


}