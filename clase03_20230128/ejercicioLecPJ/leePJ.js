const fs=require('fs');

let objeto={

}

const env=async()=>{

    try {
        
        let contenidoTxt=await fs.promises.readFile('./package.json',"utf-8");
        // console.log(contenidoTxt);
        let contenidoObj=JSON.parse(contenidoTxt);
        // console.log(contenidoObj);
    
        let size=fs.statSync('./package.json').size;
        // console.log(fs.statSync('./package.json'));
    
        objeto.contenidoTxt=contenidoTxt;
        objeto.contenidoObj=contenidoObj;
        objeto.size=size;
    
        console.log(objeto);
    } catch (error) {
        throw new Error("Error en la operación")
    }


}


env();