const fs=require('fs');
const { type } = require('os');

let persona={
    nombre:"Diego",
    edad:44,
    apellido: "Polverelli"
}

function f2(ms){
    s=ms/1000;
    m=s/60;
    h=m/60;
    d=h/24;
    a=d/365

    return Math.round(a);

}

function f1(key, valor){
    if(key==="nombre"){
        return valor.toUpperCase();
    }

    if(key==="edad"){
        return {
            fec_nac:new Date(1978,03,23),
            years: f2(new Date() - new Date(1978,03,23)),
            years2: (new Date().getFullYear() - new Date(1978,3,23).getFullYear()),
            nombre:"Prueba... en minuscula "
        }
    }

    return valor;
}

console.log(JSON.stringify(persona,f1,3));



// ruta='./files/objetos.json'

// // console.log(typeof persona);

// fs.writeFileSync(ruta,JSON.stringify(persona));

// let lectura=fs.readFileSync(ruta,"utf-8");

// lectura=JSON.parse(lectura);

// console.log(lectura.nombre);
