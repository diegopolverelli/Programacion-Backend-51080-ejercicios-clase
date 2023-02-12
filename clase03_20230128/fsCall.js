
const fs=require('fs');

let ruta='./files/archivoCall.txt';
let texto=`Prueba
Esto es una prueba...!!!

Pero con métodos de fs x callback`;

fs.writeFile(ruta,texto,(error)=>{
    if(error){
        console.log(error);
    }else{

        fs.readFile(ruta,"utf-8",(err, resultado)=>{
        
            if(err){
                console.log(err);
            }else{
                console.log(resultado);
            }
        
        });

        fs.appendFile(ruta,"\nAgrego, pero ahora con callbacks...!!!",(e)=>{
            if(e){
                console.log(e);
            }
        });

        fs.unlink(ruta,(error)=>{
            if(error){
                console.log(error);
            }
        });


    }
});

