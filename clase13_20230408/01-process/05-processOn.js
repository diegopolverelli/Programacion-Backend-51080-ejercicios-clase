process.on('uncaughtException',(error)=>{
    console.log('Nombre error:', error.name)
    console.log('Mensaje error:',error.message)
    console.log('error.stack:',error.stack)

})

process.on('exit',(codigo)=>{
    // console.log(`programa finalizado con codigo ${codigo}`)
    if(codigo==-4) console.log('Tipo invalido de datos en la función')
    if(codigo==-5) console.log('No se han especificado argumentos para la función')
    if(codigo==0) console.log('Función finaliza OK')

})

// funcion10();
console.log('inicio')
console.log('sigo...')
// process.exit(77)

const listNumbers=(...numeros)=>{
    if(numeros.length==0){
        console.error('No ha ingresado argumentos en la funcion')
        process.exit(-5)
    }

    let resultado=0;
    for(let i=0;i<numeros.length;i++){
        if(typeof numeros[i]!='number'){
            let tipos=numeros.map(el=>typeof el)
            console.error('Tipo invalido de argumentos')
            console.log(tipos)
            process.exit(-4)
        }else{
            resultado+=numeros[i]
        }
    }
    console.log(resultado)
}

// listNumbers(1,2,3,'zapato',4,true)
// listNumbers()
listNumbers(1,2,3)