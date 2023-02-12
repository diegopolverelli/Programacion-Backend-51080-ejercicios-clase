const Router=require('express').Router;
const { v4: uuidv4 } = require('uuid');

const router=Router();


const mascotas=[];

router.get('/',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mascotas
    });
});


router.post('/',(req,res)=>{
    console.log(req.body);

    let mascota=req.body;
    if(!mascota.nombre || !mascota.raza){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`Debe enviar al menos el nombre y la raza`
        });
    }

    mascota.id=uuidv4(); 
    mascotas.push(mascota);

    res.setHeader('Content-Type','application/json');
    res.status(201).json({
        message:`Todo ok...!`,
        mascotas
    });
})

router.put('/:id',(req,res)=>{

    let idmascota = req.params.id;
    let indice=mascotas.findIndex(u=>u.id==idmascota);
    if(indice==-1){

        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`mascota con id '${idmascota}' no existe en la base`
        });
    
    }

    let mascota=req.body;
    if(!mascota.nombre || !mascota.raza){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`Debe enviar al menos el nombre y el raza`
        });
    }

    mascotas.splice(indice,1);

    mascota.id=idmascota;
    mascotas.push(mascota);


    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        message:`Todo ok...!`,
        mascotas
    });

})

router.delete('/:id',(req,res)=>{

    let idmascota=req.params.id;
    let indice=mascotas.findIndex(u=>u.id==idmascota);
    if(indice==-1){

        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`mascota con id '${idmascota}' no existe en la base`
        });
    
    }

    let eliminado=mascotas[indice].nombre;
    mascotas.splice(indice,1);

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        message:`Todo ok... mascota con id ${idmascota}; mascota eliminada: ${eliminado}`,
        mascotas
    });

})

module.exports=router;