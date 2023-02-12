
const fs=require('fs');

let ruta='./files/fyh.txt';

// console.log(new Date());
let fecha=new Date().toLocaleDateString();
// console.log(fecha);

let hora=new Date().toLocaleTimeString();
// console.log(hora);

fs.writeFile(ruta,`${fecha} - ${hora}`, (error)=>{
    if (error){
        console.log(error)
    }else{
        fs.readFile(ruta,"utf-8",(e,lectura)=>{
            if(e){
                console.log(e);
            }else{
                console.log(lectura);
            }
        });
    }
})