
const dividir=(a,b)=>{
    return new Promise((res, rej)=>{
        if (b==0){
            rej('El argumento "b" no puede ser 0, ya que cumple con la función de divisor')

        }else{
            res(a/b)
        }
    })

}

const dividir2=(a,b)=>{
    return new Promise((res, rej)=>{
        if (b==0){
            return rej('El argumento "b" no puede ser 0, ya que cumple con la función de divisor')
        }

        if (b==1){
            rej('El argumento "b" no puede ser 0, ya que cumple con la función de divisor')
            return
        }

        if (b==2){
            rej('El argumento "b" no puede ser 0, ya que cumple con la función de divisor')
            return
        }

        // ...
        // codigo...
        res()



    })

}


let resultado=dividir(10,2)
                .then(res=>{
                    return dividir(500,res)
                })
                .then(console.log)
                .catch(console.log);




const env=async()=>{
    let resultado=await dividir(10,2)
    
    let resultado2=await dividir(100,2);
    
    // console.log(resultado+resultado2);
    return resultado+resultado2;
}



let resultadoFinal=env();
resultadoFinal.then(console.log)