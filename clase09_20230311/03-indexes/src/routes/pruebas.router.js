import { Router } from "express";
import { usuariosModelo } from "../models/usuarios.models.js";

export const router=Router();

router.get('/',async(req,res)=>{

    let resultado=await usuariosModelo.find({origen:{$in:['Argentina']}}).explain('executionStats')
    console.log(resultado)

    res.setHeader('Content-Type','application/json')
    res.status(200).json({
        mensaje:'API PRUEBAS OK...!!!',
        resultado:resultado.executionStats
    })
})