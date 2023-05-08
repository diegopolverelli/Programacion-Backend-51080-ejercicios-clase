import colors from 'colors'

const suma=(...numeros)=>{
    if(numeros.length<2) return "Error"

    // for(let i=0; i<numeros.length; i++){
    //     if(typeof numeros[i]!='number') return "Error"
    // }

    // numeros.every(n=>{
    //     console.log(typeof n)
    // })

    if(!numeros.every(n=>typeof n=='number')) return "Error"

    // let resultado=0
    // for(let i=0; i<numeros.length; i++){
    //     resultado=resultado+numeros[i]
    // }

    return numeros.reduce((acum, actu)=>acum=acum+actu, 0)

    // return resultado
    
}

let pruebas=0;
let ok=0;

pruebas++;
console.log(`Prueba ${pruebas}: Si recibo 2 argumentos, debe devolver la suma de ambos`)
if(suma(2,2)==4 || suma(2,4)==6){
    ok++
    console.log(`Prueba ${pruebas} ${'COMPLETADA'.green}`)
}else{
    console.log(`Prueba ${pruebas} ${'INCORRECTA'.red}`)
}

pruebas++;
console.log(`Prueba ${pruebas}: Si recibo menos de 2 argumentos, debe retornar "Error"`)
if(suma(2)=="Error" || suma()=="Error"){
    ok++
    console.log(`Prueba ${pruebas} ${'COMPLETADA'.green}`)
}else{
    console.log(`Prueba ${pruebas} ${'INCORRECTA'.red}`)
}

pruebas++;
console.log(`Prueba ${pruebas}: Si recibo algun argumento no numérico, debe retornar "Error"`)
if(suma("Carlos",9)=="Error" || suma("r",7)=="Error"){
    ok++
    console.log(`Prueba ${pruebas} ${'COMPLETADA'.green}`)
}else{
    console.log(`Prueba ${pruebas} ${'INCORRECTA'.red}`)
}


pruebas++;
console.log(`Prueba ${pruebas}: Si recibo n numeros, debe devolver la suma de los n numeros`)
if(suma(1,2,3)==6 || suma(1,2,3,4,5)==15){
    ok++
    console.log(`Prueba ${pruebas} ${'COMPLETADA'.green}`)
}else{
    console.log(`Prueba ${pruebas} ${'INCORRECTA'.red}`)
}

console.log(`${pruebas} pruebas realizadas. Se han completado de manera ${'CORRECTA'.green} ${ok.toString().green}. Pruebas ${'FALLIDAS'.red} ${(pruebas-ok).toString().red}`)


