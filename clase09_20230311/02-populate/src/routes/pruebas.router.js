import { Router } from "express";
import { alumnoModelo } from "../models/alumno.modelo.js";

export const router=Router();

router.get('/',async(req,res)=>{

    let alumno=await alumnoModelo.find()     //.populate('cursando.curso');

    let alumno2=await alumnoModelo.find().populate({
        path:'cursando.curso',
        // populate:{
        //     path:'titular.codProfesor'
        // }
    })

    res.setHeader('Content-Type','application/json')
    res.status(200).json({
        mensaje:'API PRUEBAS OK...!!!',
        alumno, alumno2
    })
})