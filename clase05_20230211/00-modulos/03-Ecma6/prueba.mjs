import Persona from './modulo.mjs';
import {usuarios} from './modulo.mjs';
import {usuarios as arrayUsuarios} from './modulo.mjs';
import {f1 as funcionSuma, f2 as funcionResta} from './modulo.mjs';
import * as utilidades from './modulo.mjs';

import fs from 'fs';
import {writeFileSync as grabaArchivo} from 'fs';

import {__dirname} from './utils.mjs';


// ********************************
// Utilización de lo importado:
let persona1=new Persona("Diego", "Polverelli");
console.log(persona1.datos);

console.log(usuarios);
console.log(arrayUsuarios);

console.log(utilidades.f1(2,2), utilidades.f2(10,3));
console.log(utilidades.usuarios);
let persona2=new utilidades.default("Cristian", "Romero");
console.log(persona2.datos);
console.log(persona2.saludo());

console.log(funcionSuma(10,10));
console.log(funcionResta(10,7));


fs.writeFileSync("./files/archivo1.txt","Hola mundo en archivo...!!!");
grabaArchivo("./files/archivo2.txt","Chau mundo en archivo...!!!");

console.log(__dirname);


usuarios.push({id:99, nombre:"Javier"});
console.log(usuarios);
console.log(utilidades.usuarios, arrayUsuarios);

// if(true){
//     import * as varios from './modulo.mjs'
//     console.log(varios.usuarios);
// }
