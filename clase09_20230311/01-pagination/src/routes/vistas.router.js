import { Router } from "express";
import { usuariosModelo } from "../models/usuarios.models.js";

export const router=Router();

router.get('/',async(req,res)=>{

    let paginaActual=1;
    if (req.query.pagina){
        paginaActual=req.query.pagina;
    }

    // let usuarios=await usuariosModelo.find();
    let usuarios=await usuariosModelo.paginate({origen:{$in:['Argentina','Chile','Uruguay']}},{page:paginaActual,limit:30,sort:{origen:1, apellido:-1}});
    console.log(usuarios)

    let {totalPages, hasPrevPage, hasNextPage, prevPage, nextPage}=usuarios;

    res.setHeader('Content-Type','text/html');
    res.status(200).render('home',{
        usuarios:usuarios.docs,
        totalPages, hasPrevPage, hasNextPage, prevPage, nextPage
    });
})

