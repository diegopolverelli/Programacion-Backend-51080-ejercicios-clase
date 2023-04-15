
const suma=(a,b)=>{
    return a+b
}

// console.log(suma(4,5))

const decoradorLog=(funcion)=>{
    return function(...params){

        // algo... funcionalidad que quiero agregar
        console.log(`La función ${funcion.name} se ejecuto en ${new Date().toUTCString()}`)

        let resultado=funcion.apply(this, params)
        return resultado
    }
}

const decoradorDuplica=(funcion)=>{
    return function(...params){

        // algo... funcionalidad que quiero agregar

        let resultado=funcion.apply(this, params)

        return resultado*2
    }
}


// const funcionDecorada=decoradorLog(suma);
// console.log(funcionDecorada(4,5))

console.log(decoradorDuplica(decoradorLog(suma))(4,5))