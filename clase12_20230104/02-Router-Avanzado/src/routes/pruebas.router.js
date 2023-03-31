import { Router } from "express";

export const router=Router();

router.get('/:numero',(req,res)=>{

    let resultado=req.params.numero>=0?`El numero ${req.params.numero} es mayor o igual a cero`:`El numero ${req.params.numero} es negativo`

    res.send(resultado)
})



let errores={
    a:'Error de consola', 
    b:'Error en interface', 
    c:'Error de parametrización'
}
