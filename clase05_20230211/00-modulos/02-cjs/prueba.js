// Creo una variable "clase", e importo dentro todo lo exportado desde módulo.
// Notar más abajo que para utilizarla debo esecribir clase.usuarios, clase.SerHumano
let clase=require('./modulo')


// Creo la variable Persona, e importo dentro solo la clase SerHumano (notar el ".SerHumano" que
// está pegado a la derecha del require)
// De esta forma puedo utilizar directamente Persona para instanciar un objeto. Ver más abajo
let Persona=require('./modulo').SerHumano;

// Hago exactamente lo mismo que en la instrucción anterior, pero ahora para el array exportado
// desde módulo, y luego para la función suma.  
let usuarios=require('./modulo').usuarios;
let funcionSuma=require('./modulo').suma;

// Instrucción que ya hemos utilizado, donde importo en la variable fs, todo el contenido exportado
// por el módulo fs
let fs=require('fs');

// Creo la variable grabaArchivo e importo en ella solamente el método writeFileSync. Lo importo
// desde fs
let grabaArchivo=require('fs').writeFileSync;

// Con una desestruccuración: desestructura require y toma solo las funciones appendFileSync
// y existSync
const {appendFileSync, existsSync}=require('fs');

// lo mismo que en el renglón anterior, pero renombre ambas funciones (o las variables que las contienen)
const {appendFileSync:agregaAArchivo, existsSync:verificaSiExisteArchivo}=require('fs');

const {join:armaruta} =require('path');
const path=require('path');

console.log(__dirname);
console.log(path.join(__dirname,'./files/archivo1.txt'));

// console.log(armaruta(__dirname, '../../', './00-modulos','./03-Ecma6/', './files','archivo1.txt'));


// ********************************
// Utilización de lo importado:
let persona1=new clase.SerHumano("Diego", "Polverelli");
console.log(persona1.datos);


let persona2=new Persona("Juan Carlos", "Rodriguez");
console.log(persona2.datos);

console.log(clase.usuarios);
console.log(usuarios);

console.log(clase.usuarios[0]);
console.log(usuarios[0]);


console.log(clase.suma(5,5));
console.log(funcionSuma(5,5));


fs.writeFileSync("./files/archivo1.txt","Hello World...!!!");
grabaArchivo("./files/archivo2.txt","Bye bye World...!!!");

appendFileSync("./files/archivo1.txt","\nHello World... de nuevo...!!!")
agregaAArchivo("./files/archivo2.txt","\nBye bye World... de nuevo...!!!")

if(verificaSiExisteArchivo("./files/archivo2.txt")){
    console.log("El archivo ./files/archivo2.txt existe...!!!")
}

if(existsSync("./files/archivo1.txt")){
    console.log("El archivo ./files/archivo1.txt existe también...!!!")
}


usuarios.push({id:99, nombre:"Javier"});
console.log(usuarios);
console.log(clase.usuarios);

let usuariosPrueba=[];
let i=100;
if (i>10){
    // puedo hacer un "require condicional"; esto no puede ejecutarse con import
    usuariosPrueba=require('./modulo').usuarios;
}
console.log({usuariosPrueba});
