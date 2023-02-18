const Router=require('express').Router;
const { v4: uuidv4 } = require('uuid');

const router=Router();


const usuarios=[];

router.get('/',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        usuarios
    });
});


router.post('/',(req,res)=>{
    console.log(req.body);

    let usuario=req.body;
    if(!usuario.nombre || !usuario.apellido){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`Debe enviar al menos el nombre y el apellido`
        });
    }

    usuario.id=uuidv4(); 
    usuarios.push(usuario);

    res.setHeader('Content-Type','application/json');
    res.status(201).json({
        message:`Todo ok...!`,
        usuarios
    });
})

router.put('/:id',(req,res)=>{

    let idUsuario = req.params.id;
    let indice=usuarios.findIndex(u=>u.id==idUsuario);
    if(indice==-1){

        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`Usuario con id '${idUsuario}' no existe en la base`
        });
    
    }

    let usuario=req.body;
    if(!usuario.nombre || !usuario.apellido){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`Debe enviar al menos el nombre y el apellido`
        });
    }

    usuarios.splice(indice,1);

    usuario.id=idUsuario;
    usuarios.push(usuario);


    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        message:`Todo ok...!`,
        usuarios
    });

})

router.delete('/:id',(req,res)=>{

    let idUsuario=req.params.id;
    let indice=usuarios.findIndex(u=>u.id==idUsuario);
    if(indice==-1){

        res.setHeader('Content-Type','application/json');
        return res.status(400).json({
            message:`Usuario con id '${idUsuario}' no existe en la base`
        });
    
    }

    let eliminado=usuarios[indice].apellido;
    usuarios.splice(indice,1);

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        message:`Todo ok... usuario con id ${idUsuario}; usuario eliminado: ${eliminado}`,
        usuarios
    });

})

module.exports=router;