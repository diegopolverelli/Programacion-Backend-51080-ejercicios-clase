import { Router } from "express";
import { validarJWT } from "../utils/utils.js";

export const router=Router();

// const auth=(req, res, next)=>{
//     if(!req.session.usuario) return res.redirect('/login')    //return res.sendStatus(401);
//     next();
// }

// const auth2=(req, res, next)=>{
//     if(req.session.usuario) return res.redirect('/')    //return res.sendStatus(401);
//     next();
// }

router.get('/',validarJWT,(req,res)=>{

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