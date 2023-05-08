export const suma=(...numeros)=>{
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
