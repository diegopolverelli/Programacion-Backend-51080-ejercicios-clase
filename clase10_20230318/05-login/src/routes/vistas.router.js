import { Router } from "express";

export const router=Router();

const auth=(req, res, next)=>{
    if(!req.session.usuario) return res.redirect('/login')    //return res.sendStatus(401);
    next();
}

const auth2=(req, res, next)=>{
    if(req.session.usuario) return res.redirect('/')    //return res.sendStatus(401);
    next();
}

router.get('/',auth,(req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.status(200).render('home',{
        nombreCompleto:req.session.usuario.nombre+' '+req.session.usuario.apellido
    })
})

router.get('/registro',auth2,(req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    res.status(200).render('registro')
})

router.get('/login',auth2,(req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    res.status(200).render('login')
})