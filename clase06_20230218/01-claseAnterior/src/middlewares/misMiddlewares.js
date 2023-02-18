const fs=require('fs');

const misMiddlewares={
    midd1:(req,res,next)=>{
        // console.log(`midd1: ${req.method} - ${req.url}`);

        let archivoLog=('./src/logs/info.log');

        if(fs.existsSync(archivoLog)){
            fs.appendFileSync(archivoLog,`\nLOG: ${req.method} - ${req.url} - ${new Date().toUTCString()}`)
        }else{
            fs.writeFileSync(archivoLog,`LOG: ${req.method} - ${req.url} - ${new Date().toUTCString()}`)
        }

        next();
    },
    midd2:(req,res,next)=>{
        // console.log(`midd1: ${req.method} - ${req.url}`);

        let archivoLog=('./src/logs/info.log');

        if(fs.existsSync(archivoLog)){
            fs.appendFileSync(archivoLog,` - ATENCION...!!! se han guardado datos en la DB`)
        }else{
            fs.writeFileSync(archivoLog,` - ATENCION...!!! se han guardado datos en la DB`)
        }

        next();
    },
    midd3:(req,res,next)=>{
        if(req.body.nombre){
            req.body.nombre=req.body.nombre.toUpperCase();
        }

        if(req.body.raza){
            req.body.raza=req.body.raza.toUpperCase();
        }

        req.body.infoAdicional=`Informacion introducida vía un Middleware`;

        next();

    },
    middErrores:(error,req, res, next)=>{
        if(error){

            let archivoLog=('./src/logs/info.log');

            if(fs.existsSync(archivoLog)){
                fs.appendFileSync(archivoLog,`\nERROR...!!! - ${req.method} - ${req.url} - ${new Date().toUTCString()}`)
                fs.appendFileSync(archivoLog,`\nDescripcion del error: ${error}`)

            }else{
                fs.writeFileSync(archivoLog,`ERROR...!!! - ${req.method} - ${req.url} - ${new Date().toUTCString()}`)
                fs.appendFileSync(archivoLog,`\nDescripcion del error: ${error}`)

            }
    
            res.status(500).json({
                message:`Error interno en el servidor. Por favor contacte al administrador...`
            });
        }else{
            next();
        }
    }
}

module.exports=misMiddlewares;