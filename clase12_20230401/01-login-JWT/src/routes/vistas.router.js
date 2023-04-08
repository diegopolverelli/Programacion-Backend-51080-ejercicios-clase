import { Router } from "express";
import { passportCall, validarJWT } from "../utils/utils.js";
import passport from "passport";

export const router=Router();


const autorizacion=(rol)=>{
    return (req, res, next)=>{
        console.log(req.user)

        if(req.user.rol=='ADMIN') return next();
        if(req.user.rol!=rol) return res.status(403).send('No tiene privilegios suficientes para acceder al recurso');
        next();
    }
}

// router.get('/datos',validarJWT,(req,res)=>{
// router.get('/datos',passport.authenticate('jwt',{session:false}),(req,res)=>{
router.get('/datos',passportCall('jwt'),autorizacion('ADMIN'),(req,res)=>{

    res.send(`Datos actualizados... hora actual: ${new Date().toUTCString()}`)
})

// const auth=(req, res, next)=>{
//     if(!req.session.usuario) return res.redirect('/login')    //return res.sendStatus(401);
//     next();
// }

// const auth2=(req, res, next)=>{
//     if(req.session.usuario) return res.redirect('/')    //return res.sendStatus(401);
//     next();
// }

// router.get('/',validarJWT,(req,res)=>{
// router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
router.get('/',passportCall('jwt'),autorizacion('USUARIO'),(req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.status(200).render('home',{
        // nombreCompleto:req.session.usuario.nombre+' '+req.session.usuario.apellido
        nombreCompleto:req.user.nombre+' '+req.user.apellido
    })
})

router.get('/registro',(req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    res.status(200).render('registro')
})

router.get('/login',(req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    res.status(200).render('login')
})