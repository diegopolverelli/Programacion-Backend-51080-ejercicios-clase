import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const creaHash=(password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

export const esClaveValida=(password, usuario)=>{
    return bcrypt.compareSync(password, usuario.password);
}

const SECRET='miPalabraSecreta';

export const creaJWT=(usuario)=>{
    return jwt.sign({usuario},SECRET,{expiresIn:'24h'});
}

export const validarJWT=(req, res, next)=>{
    let token='';
    if(req.cookies['codertoken']){
        token=req.cookies['codertoken'];
    }else{
        if(req.headers.codertoken){
            token=req.headers.codertoken;
        }else{
            if(req.query.codertoken){
                token=req.query.codertoken;
            }else{
                res.sendStatus(401);
            }
        }
    }
    
    jwt.verify(token, SECRET, (error, credenciales)=>{
        if(error){
            res.sendStatus(401);
        }else{
            req.user=credenciales.usuario;
            next();
        }
    })

}