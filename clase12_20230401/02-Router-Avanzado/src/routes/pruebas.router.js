import { Router } from "express";

export const router=Router();

router.get('/:numero([0-9-]+)',(req,res)=>{

    let resultado=req.params.numero>=0?`El numero ${req.params.numero} es mayor o igual a cero`:`El numero ${req.params.numero} es negativo`

    res.send(resultado)
})



let errores={
    a:'Error de consola', 
    b:'Error en interface', 
    c:'Error de parametrización'
}

router.param('codigo',(req, res, next, codigo)=>{
    let errorDescrip='Error indeterminado';
    if(errores[codigo]){
        errorDescrip=errores[codigo];
    }

    req.errorDescrip=errorDescrip;
    next();

})

router.get('/error/:codigo',(req, res)=>{
    // let errorDescrip='Error indeterminado';
    // if(errores[req.params.codigo]){
    //     errorDescrip=errores[req.params.codigo];
    // }

    res.send(`El error es ${req.errorDescrip}`);
})

router.get('/error2/:nombre/:codigo/:lugar',(req, res)=>{
    // let errorDescrip='Error indeterminado';
    // if(errores[req.params.codigo]){
    //     errorDescrip=errores[req.params.codigo];
    // }

    res.send(`El usuario ${req.params.nombre} ha reportado un ${req.errorDescrip} en el sector ${req.params.lugar}`);
})



router.get('*',(req,res)=>{
    res.sendStatus(400);
})

