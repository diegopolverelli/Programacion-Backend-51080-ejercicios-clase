import { UsuariosMysqlDAO as DAO } from "../dao/mysqlDAO/mysqlDAO.js";
import { Router } from "express";

export const router=Router()

router.get('/',async(req,res)=>{
    let usuarios=await DAO.getUsuarios()

    res.status(200).send(usuarios)
})

router.get('/:id',async(req,res)=>{

    let id=req.params.id;

    let usuario=await DAO.getUsuarioById(id)

    if(!usuario) return res.status(404).send(`Usuario con id ${id} no existe en BD`)

    res.status(200).send(usuario)
})

router.post('/',async(req,res)=>{
    
    let {nombre, email}=req.body;

    if(!nombre || !email) return res.status(400).send('Faltan datos')

    let existe= await DAO.getUsuarioByEmail(email)
    console.log(existe)
    if(existe) return res.status(400).send(`Existe un usuario con email ${email} en la BD`)

    let usuarios=await DAO.createUsuario({nombre, email})

    res.status(200).send(usuarios)
})

router.put('/:id',async(req,res)=>{

    let id=req.params.id
    
    let {nombre, email}=req.body;

    if(!nombre || !email) return res.status(400).send('Faltan datos')

    let usuarioActualizado=await DAO.updateUsuario(id, {nombre, email})

    if(!usuarioActualizado) return res.status(404).send(`Usuario con id ${id} no existe en BD`)
    res.status(200).send('Usuario actualizado')
})


router.delete('/:id',async(req,res)=>{

    let id=req.params.id

    let resultado=await DAO.deleteUsuario(id)

    if(!resultado) return res.status(404).send(`Usuario con id ${id} no existe en BD`)
    res.status(200).send('Usuario eliminado')
})