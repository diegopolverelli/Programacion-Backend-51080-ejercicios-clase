const fs=require('fs');

// fs.promises.writeFile('./files/archivoPromesas.txt',"Prueba archivo, con promesas...!!!")
// .then(res=>{

// });

let ruta='./files/archivoPromesas.txt';

const env=async()=>{

    try {
        await fs.promises.writeFile('./files/archivoPromesas.txt',"Prueba archivo, con promesas...!!!");
    
        let lectura=await fs.promises.readFile(ruta,"utf-8");
        console.log(lectura);

        await fs.promises.appendFile(ruta,"\n\nagregado, pero con promesas...!!!");

        lectura=await fs.promises.readFile(ruta,"utf-8");
        console.log(lectura);

        await fs.promises.unlink(ruta);

    } catch (error) {
        console.log(error);
    }



}

env();
