
const f1=(x)=>{
    return x+1
}

const f2=x=>x+1;

console.log(f1(100), f2(100));


const miMap=(arreglo, callback)=>{
    let nuevoArreglo=[];

    for(let i=0; i<arreglo.length; i++){
        let nuevoElemento=callback(arreglo[i])
        nuevoArreglo.push(nuevoElemento);
    }

    return nuevoArreglo;
}

let heroes=["Ironman", "Hulk"];
console.log(heroes);
console.log(heroes.map(heroe=>heroe+" de Avengers"));

console.log(miMap(heroes,heroe=>heroe+" de Avengers"));

Array.prototype.miMap=function(callback){
    let nuevoArreglo=[];

    for(let i=0; i<this.length; i++){
        let nuevoElemento=callback(this[i])
        nuevoArreglo.push(nuevoElemento);
    }

    return nuevoArreglo;

}

console.log(heroes.miMap(heroe=>heroe+" de Avengers"));

const sumar=(a,b)=>{
    return a+b;
}

const restar=(a,b)=>{
    return a-b;
}

const cualquierCosa=(a,b)=>{
    return a**2+b**2;
}

const calculo=(a,b,cb)=>{
    return cb(a,b);
}

let res=calculo(10,10, sumar);
console.log(res);
res=calculo(10,7, restar);
console.log(res);
res=calculo(2,3, cualquierCosa);
console.log(res);

res=calculo(2,3, (a,b)=>a*b);
console.log(res);

let heroes2=[
    {
        id:1,
        nombre:'Ironman'
    },
    {
        id:2,
        nombre:'Hulk'
    }
]

const buscaHeroe=(id, cb)=>{
    res=heroes2.findIndex(objeto=>objeto.id==id);
    if (res!=-1){
        cb(null, heroes2[res]);
    }else{
        cb("No existe, error");
    }
}

console.clear();
buscaHeroe(2, (error,heroe)=>{
    if(error){
        console.log("ERROR!");
        console.log(error);
    }else{
        console.log(heroe);
    }
})

console.clear();

const dividir=(dividendo, divisor)=>{
    return new Promise((res, rej)=>{
        if(divisor==0){
            rej("No se puede dividir por cero...!!!");
        }else{
            res(dividendo/divisor);
        }
    });
}

dividir(100,0)
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))
    .finally(()=>console.log("Finalizó la funcion dividir...!!!"))

const sumar1=(v1, v2)=>{
    return new Promise((res, rej)=>{
        res(v1+v2)
    });
}

sumar1(10,10)
    .then(resultado=>{
        sumar1(resultado,10)
            .then(resultado2=>{
                sumar1(resultado2,10)
                    .then(resultadoFinal=>console.log(resultadoFinal))
            })
    })

sumar1(10,10)
    .then(resultado=>{
        return sumar1(resultado,10)
    })
    .then(rusultado1=>{
        return sumar1(rusultado1,10)
    })
    .then(resultadoFinal=>console.log(resultadoFinal))
    .catch(error=>console.log(error));
