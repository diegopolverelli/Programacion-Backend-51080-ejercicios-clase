
const fs=require('fs');

let ruta='./files/archivoSync.txt';
let texto=`Prueba
Esto es una prueba...!!!`;

fs.writeFileSync(ruta,texto,{encoding:"utf-8"});

let lectura=fs.readFileSync(ruta, "utf-8");
console.log(lectura);

if (fs.existsSync(ruta)){
    console.log(`${ruta} existe...!!!`);
}


fs.appendFileSync(ruta,"\n\nAgregado...!!!");

if (fs.existsSync(ruta)){
    fs.unlinkSync(ruta);
}

