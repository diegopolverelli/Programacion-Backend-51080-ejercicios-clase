import { usuariosService } from "../services/index.js";


const getUsuarios=async(req,res)=>{

    let usuarios=await usuariosService.obtenerUsuarios()

    res.setHeader('Content-Type','application/json');
    res.status(200).json(usuarios);
}

const getUsuarioByNombre=async(req,res)=>{

    let usuarios=await usuariosService.obtenerUsuarioPorNombre(req.params.nombre)

    res.setHeader('Content-Type','application/json');
    res.status(200).json(usuarios);
}

const getUsuarioByApellido=async(req,res)=>{

    let usuarios=await usuariosService.obtenerUsuarioPorApellido(req.params.apellido)

    res.setHeader('Content-Type','application/json');
    res.status(200).json(usuarios);
}

const grabaUsuario=async(req,res)=>{

    // faltarían las validaciones... 

    let usuarioGuardado=await usuariosService.grabaUsuario(req.body) 

    res.setHeader('Content-Type','application/json');
    res.status(200).json(usuarioGuardado);
}

export default {getUsuarioByApellido, getUsuarioByNombre, getUsuarios, grabaUsuario}