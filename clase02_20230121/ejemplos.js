
let numero=10;

let potencia=Math.pow(numero,2);

potencia=numero**2;
console.log(potencia);

let heroes=['Superman', "Batman", "Flash"];
let res=heroes.includes('Batman 2');
console.log(res);

console.clear()
let persona={
    nombre:"Diego",
    apellido:"Polverelli",
    edad:44
}

console.log(Object.values(persona));

let {nombre, edad}=persona;
console.log({nombre, edad});
console.log(edad+10);

let [h1, , h2]=heroes;
console.log({h1, h2});

let marvel=["Ironman", "Hulk"];

todosLosHeroes=[...marvel, ...heroes ];
console.log(todosLosHeroes);

let copiaHeroes=[...heroes];

copiaHeroes.push("Mujer Maravilla");

console.log({copiaHeroes});
console.log({heroes});

function minimo(v1, v2, ...rest){
    console.log({v1, v2, rest});

}

minimo(10, 20, 30, 100, 4, 19, "José", false);


let {nombre:first_name, ...elResto}=persona;
console.log({first_name, elResto});

console.clear();

marvel.push(["Capi","Black Widow"]);
marvel[2].push(["Capitana Marvel", "Loki"]);
console.log(marvel);
console.log(marvel.flat());

let saludo="      hola          ";
console.log(`esto es lo que hay en saludo: ****${saludo}****`);
console.log(`esto es lo que hay en saludo: ****${saludo.trim()}****`);


console.clear();
let valor=0;

undefined, null, 0, NaN, '', false

let numero1=valor||"no definido";
console.log(numero1);

let numero2=valor??"no definido";
console.log(numero2);

numero2=undefined??"No definido"
console.log(numero2);

class ClasePrueba{
    #clave=[1234, 456];
    constructor(nombre){
        this.nombre=nombre
    }

    getClave(){
        return [...this.#clave];
    }



}

let ob1=new ClasePrueba("Diego");
console.log(ob1.nombre);
console.log(ob1.getClave());

let clave=ob1.getClave();
console.log(clave);

clave.shift();
clave.push("Otra clave...!!!");
console.log(clave);
console.log(ob1.getClave());

console.clear();
console.log(persona);
console.log(Object.hasOwn(persona,"nombres"));