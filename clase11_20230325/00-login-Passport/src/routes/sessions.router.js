import { Router } from "express";
// import crypto from 'crypto';
// import { usuarioModelo } from "../models/usuario.modelo.js";
// import { creaHash, esClaveValida } from "../utils/utils.js";
import passport from "passport";

export const router=Router();

router.get('/github',passport.authenticate('github',{}),(req,res)=>{

})

router.get('/callbackGithub',passport.authenticate('github',{failureRedirect:'/login'}),(req,res)=>{

    // console.log('REQ.USER...!!!:',req.user);

    req.session.usuario={
        nombre:req.user.nombre, 
        apellido:req.user.apellido, 
        email:req.user.email, 
        edad:req.user.edad
    }

    res.redirect('/');

})


router.post('/registro',passport.authenticate('registro',{failureRedirect:'/api/sessions/errorRegistro',successRedirect:'/login'}),async(req,res)=>{

    // let {nombre, apellido, email, password, edad}=req.body;

    // if(!email || !password) return res.sendStatus(400)

    // let usuarioActual=await usuarioModelo.findOne({email:email})
    
    // if(usuarioActual) return res.sendStatus(400);
    
    // await usuarioModelo.create({
    //     nombre, apellido, email, 
    //     // password:crypto.createHash('sha256','palabraSecreta').update(password).digest('base64'),
    //     password:creaHash(password),
    //     edad
    // })
    
    // res.redirect('/login');

})

router.get('/errorRegistro',(req, res)=>{
    res.send('Error Registro...');
})

router.get('/errorLogin',(req, res)=>{
    res.send('Error Login...');
})

router.post('/login',passport.authenticate('login',{failureRedirect:'/api/sessions/errorLogin'}),async(req,res)=>{
  
    // let {email, password}=req.body;

    // if(!email || !password) return res.sendStatus(400)

    // // let usuario=await usuarioModelo.findOne({email:email, password:crypto.createHash('sha256','palabraSecreta').update(password).digest('base64')})
    // let usuario=await usuarioModelo.findOne({email:email})
    
    // if(!usuario) return res.sendStatus(401);
    // if(!esClaveValida(password, usuario))  return res.sendStatus(401);

    req.session.usuario={
        nombre:req.user.nombre, 
        apellido:req.user.apellido, 
        email:req.user.email, 
        edad:req.user.edad
    }

    res.redirect('/');
  
    
})

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            res.sendStatus(500);
        }else{
            res.redirect('/login');
        }
    });
})
