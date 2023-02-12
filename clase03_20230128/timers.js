
// console.log("inicio programa");

// setTimeout(()=>{
//     console.log("Termino el TimeOut 0 segundos")
// },0);

setTimeout(()=>{
    console.log("Termino el TimeOut 3 seg.")
},3000);

// console.log("fin programa");

let contador=1;
let intervalo=setInterval(()=>{
    console.log(contador);
    contador++;
    if (contador==7){
        clearInterval(intervalo);
    }
},1000);
