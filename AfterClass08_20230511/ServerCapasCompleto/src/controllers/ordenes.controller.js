import { NegocioService } from "../services/negocios.service.js"
import { OrdenService } from "../services/ordenes.service.js"
import { UsuariosService } from "../services/usuarios.service.js"
import MisRespuestas from "../utils/customResponses.js"
import mongoose from "mongoose"



const getOrdenes=async(req, res)=>{
    // lógica de negocio
    let ordenes=await OrdenService.getOrdenes()

    MisRespuestas.respuestaExitosa(res, ordenes)
}

const createOrden=async(req,res)=>{
    let {idUsuario, idNegocio, pedido}=req.body

    if(!idUsuario || !idNegocio || !pedido) return MisRespuestas.errorCliente(res, 'Faltan datos')

    let usuario;
    // con el IF que está debajo, se soluciona el error que ocurría cuando enviabamos un string como 
    // idUsuario. Si mongoose recibe como filtro (filtro que apunta a _id) un determinado dato, trata
    // de convertirlo a un idMongo válido. Si no puede lograrlo, da error. De ahí la necesidad de utilizar
    // este método ObjectId.isValid. No es el mejor lugar para implementar la validación
    // (aquí, en la capa de negocios...), pero quería que les quede registro de la solución al error. 
    // Luego sería cuestión de, o mover la validación al DAO, y ver como recibir la respuesta (podría devolverse
    // por ejemplo null, o algún código especial), o también podríamos armar una función en utils. 
    // Debieramos hacer exactamente lo mismo cada vez que se realice un filtro "byId"
    if (mongoose.Types.ObjectId.isValid(idUsuario)){  
        usuario=await UsuariosService.getUsuarioById(idUsuario)
    }else{return res.send('ERROR, NO ES ID VALIDO...!!!')}

    // console.log(usuario)
    if(!usuario) return MisRespuestas.errorCliente(res,`El usuario con id ${idUsuario} no existe en la BD`)

    let negocio=await NegocioService.getNegociosById(idNegocio)
    if(!negocio) return MisRespuestas.errorCliente(res,`El negocio con id ${idNegocio} no existe en la BD`)

    let items=[]
    pedido.forEach(i=>{
        let producto=negocio.productos.find(p=>p.id==i.id)
        if(producto){
            items.push({
                id:i.id,
                descrip:producto.descrip,
                precio:producto.precio,
                cantidad:i.cantidad,
                subtotal:i.cantidad*producto.precio
            })
        }
    })

    let importe=items.reduce((acum, actu)=>acum=acum+actu.subtotal,0)

    let orden={
        numeroOrden: Date.now(),
        usuario: idUsuario,
        negocio: idNegocio,
        productos:items,
        importe
    }

    let ordenGrabada=await OrdenService.grabaOrden(orden)

    usuario.pedidos.push(
        {
            nroPedido:ordenGrabada._id
        }
    )

    await UsuariosService.actualizaUsuario(usuario)

    MisRespuestas.respuestaAltaExitosa(res, ordenGrabada)
}


export default {getOrdenes, createOrden}