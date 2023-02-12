import Persona from './modulo.js';

import {usuarios} from './modulo2.js';
import {usuarios as arrayUsuarios} from './modulo2.js';
import * as utilidades from './modulo2.js';

import fs from 'fs';
import {writeFileSync as grabaArchivo} from 'fs';

import __dirname from './utils.js';

// ********************************
// Utilización de todo lo importado:
let persona1=new Persona("Diego", "Polverelli");
console.log(persona1.datos);

console.log(usuarios);
console.log(arrayUsuarios);
console.log(utilidades.f1(100,320));
console.log(utilidades.f2(10,88));

let persona2=new utilidades.default("Gonzalo", "Montiel");
console.log(persona2.saludo());

fs.writeFileSync(__dirname+'/files/archivo1.txt',"Hello...!!!");
grabaArchivo(__dirname+'/files/archivo2.txt',"Bye...!!!");