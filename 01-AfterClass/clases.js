class Persona{

    static contador=0;
    nombre;
    apellido;

    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;    
        Persona.contador++;
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }

    get getNombre(){
        return this.nombre;
    }

    imprime(){
        console.log(this.nombre);
    }

}

let persona1=new Persona("Diego","Lopez");
persona1.imprime();
persona1.setNombre="Matias"
console.log(persona1.nombre, persona1.getNombre);

let persona2=new Persona("Laura","Ramos");

console.log(Persona.contador);

class Artista extends Persona{
    constructor(nombre, apellido, profesión, obras=[]){
        super(nombre, apellido);
        this.profesión=profesión;
        this.obras=obras;
    }

    imprimeObras(){
        let objeto1={
            Artista: `${this.nombre} ${this.apellido}`,
            obras:{}
        };
        for(let i=0; i<this.obras.length; i++){
            objeto1.obras["obra_"+zfill(i+1,3)]=this.obras[i];
        }
        console.log(objeto1);
    }

}

let persona3=new Artista("Eduardo", "Galeano", "Escritor", ["Las venas abiertas de Latinoamerica", "El libro de los abrazos"]);

console.log(persona3);
persona3.imprime();
persona3.imprimeObras();
console.log(persona3.getNombre);

let persona4=new Artista("Ricardo","Mollo","Músico",["¿Que ves?","Nene de antes","Pepe Lui","Paisano de Hurlingham"])
persona4.imprimeObras();



function zfill(number, width) {
    let numberOutput = Math.abs(number); /* Valor absoluto del número */
    let length = number.toString().length; /* Largo del número */ 
    let zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}

class Varios{
    path='./prueba';

    // constructor(){
    //     console.log("se ejecuto el constructor");
    //     console.log("variables inicializadas OK");
    // }
    
    saludo(){
        console.log("Hola")
    }

    limpieza(){
        //...
        console.log("Variables borradas OK")
    }

}

let utilidades=new Varios();

utilidades.limpieza();
