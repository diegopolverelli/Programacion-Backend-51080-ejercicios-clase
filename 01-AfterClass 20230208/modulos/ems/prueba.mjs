import clasePersona from './clase.mjs';
import {usuarios} from './clase.mjs';
import {usuarios as arrayUsuarios} from './clase.mjs';
import * as utilidades from './clase.mjs';

let persona1=new clasePersona("Diego", "Polverelli");
console.log(persona1.datos);

console.log(usuarios);
console.log(arrayUsuarios);

console.log(utilidades.f1(2,2), utilidades.f2(10,3));
console.log(utilidades.usuarios);
let persona2=new utilidades.default("Cristian", "Romero");
persona2.datos;
console.log(persona2.saludo());

utilidades.