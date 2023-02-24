import { Router } from "express";
// import { io } from "../app.js";
const router=Router();


const heroes=[];
router.post('/',(req, res)=>{
    let heroe=req.body;
    let io=req.serverSocket;

    if (!heroe.nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            mensaje:`Tiene que enviar al menos el nombre por el body`
        })
    }

    heroes.push(heroe);
    io.emit('nuevoHeroeCreado',heroe.nombre)
    // global.io.emit('nuevoHeroeCreado',heroe.nombre)

    res.setHeader('Content-Type','application/json');
    res.status(201).json({
        heroe
    })

})



export  {router}