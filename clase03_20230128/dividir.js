function dividir(dividendo, divisor) {
    return new Promise((res, rej) => {
        if (divisor == 0) {
            rej("No se puede dividir por 0");
            return null;
            console.log("hola...!!!")
            console.log("¿esto se ejecutará?")

        } else {
            res(dividendo / divisor);
        }

        console.log("¿y esto...?");
    });
}

// const numero = 100;

// dividir(numero, 2)
//     .then(numero => console.log(numero))
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log("Fin")
//     });


// dividir(100,2)
//     .then(resultado=>{
//         return dividir(200,resultado)
//     })
//     .then(resultado=>console.log(resultado))
//     .catch(error=>console.log(error));


function sumar(a, b){
    return new Promise((res, rej)=>{
        if(a==0 || b==0){
            rej(`Operación innecesaria`);
        }else{
            res(a+b)
        }
    });
}

function restar(a, b){
    return new Promise((res, rej)=>{
        if(a==0 || b==0){
            rej(`Operación innecesaria`);
        }else{
            res(a-b)
        }
    });
}

function multiplicar(a, b){
    return new Promise((res, rej)=>{
        if(a==0 || b==0){
            rej(`Operación innecesaria`);
        }else{
            res(a*b)
        }
    });
}

//multiplicar con la función suma:
// sumar(10,10)
//     .then(res=>{
//         sumar(res,10)
//             .then(res=>{
//                 sumar(res,10)
//                     .then(res=>{
//                         console.log(res);
//                     })
//             })
//     })

// (10/2) + (30/10)
// let resultadoAux=0;

// dividir(10,2)
// .then(resultado1=>{
//     resultadoAux=resultado1;
//     return dividir(30,10)
// })
// .then(resultado2=>{
//     return sumar(resultadoAux, resultado2);
// })
// .then(resultadoFinal=>console.log(resultadoFinal))

async function calculo(){

    try {
        let resultado1=await dividir(10,2);
        let resultado2=await dividir(30,0);
        let resultadoFinal=await sumar(resultado1, resultado2);
    
        console.log(resultadoFinal);
        return resultadoFinal;
    } catch (error) {
        console.log(error);        
    }

}

calculo().then(res=>console.log(res));