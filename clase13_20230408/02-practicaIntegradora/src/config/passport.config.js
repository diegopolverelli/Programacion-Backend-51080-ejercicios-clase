import passport from 'passport';
import passportJWT from 'passport-jwt';
import { config } from './config.js';

const extraeToken=(req)=>{
    let token=null;
    if(req.cookies.codertoken) {
        console.log('Leyo desde passport la cookie')
        token=req.cookies.codertoken;
    }

    return token
}

export const inicializaEstrategias=()=>{

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