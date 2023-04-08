import { Router } from "express";
import { usuarioModelo } from "../models/usuario.modelo.js";
import crypto from 'crypto';
import { creaHash, creaJWT, esClaveValida } from "../utils/utils.js";

export const router=Router();

router.post('/registro',async(req,res)=>{

    let {nombre, apellido, email, password, edad}=req.body;

    if(!email || !password) return res.sendStatus(400)

    let usuarioActual=await usuarioModelo.findOne({email:email})
    
    if(usuarioActual) return res.sendStatus(400);
    
    await usuarioModelo.create({
        nombre, apellido, email, 
        // password:crypto.createHash('sha256','palabraSecreta').update(password).digest('base64'),
        password:creaHash(password),
        edad
    })

    res.redirect('/login');

})

router.post('/login',async(req,res)=>{
  
    let {email, password}=req.body;

    if(!email || !password) return res.sendStatus(400)

    let usuario=await usuarioModelo.findOne({email:email})
    
    if(!usuario) return res.sendStatus(401)
    
    if(!esClaveValida(password, usuario)) return res.sendStatus(401)

    // req.session.usuario={
    //     nombre:usuario.nombre, 
    //     apellido:usuario.apellido, 
    //     email, 
    //     edad:usuario.edad
    // }

    let usuarioConRol={
        nombre:usuario.nombre, 
        apellido:usuario.apellido, 
        email, 
        edad:usuario.edad,
        rol:usuario.nombre=='Diego'?'ADMIN':'USUARIO'
    }

    let token=creaJWT(usuarioConRol);

    // res.cookie('codertoken',token,{maxAge:1000*60*120}).redirect('/');
    res.cookie('codertoken',token,{maxAge:1000*60*120, httpOnly:true})
    .cookie('cookieConHttpOnly',token,{maxAge:1000*60*120, httpOnly:true})
    .cookie('cookieSinHttpOnly',token,{maxAge:1000*60*120}).send({token});
  
    
})

router.get('/logout',(req,res)=>{
    // req.session.destroy((err)=>{
    //     if(err){
    //         res.sendStatus(500);
    //     }else{
    //         res.redirect('/login');
    //     }
    // });
    res.redirect('/login')
})
