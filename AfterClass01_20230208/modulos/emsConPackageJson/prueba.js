import clase1 from './clase.js';


import {usuarios} from './clase2.js';
import {usuarios as arrayUsuarios} from './clase2.js';
import * as utilidades from './clase2.js';
import __dirname from './utils.js';
import fs from 'fs';
// const fs=require('fs')

fs.writeFileSync(__dirname+"/files/prueba.txt","Esto es un archivo de prueba");

let persona1=new clase1("Diego", "Polverelli");
console.log(persona1.datos);

console.log(usuarios);
console.log(arrayUsuarios);
console.log(utilidades.f1(100,320));
console.log(utilidades.f2(10,88));

let persona2=new utilidades.default("Gonzalo", "Montiel");
console.log(persona2.saludo());

console.log(__dirname);