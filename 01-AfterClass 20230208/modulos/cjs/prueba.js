let clase1=require('./clase.js')
let Persona=require('./clase').Clase1;
let usuarios=require('./clase').usuarios;

let persona1=new clase1.Clase1("Diego", "Polverelli");
console.log(persona1.datos);

let persona2=new Persona("Juan Carlos", "Rodriguez");
console.log(persona2.datos);

console.log(clase1.usuarios);
console.log(usuarios);

console.log(`contenido de variable __dirname: ${__dirname}`);

console.log(__dirname+'files/archivo1.txt');
