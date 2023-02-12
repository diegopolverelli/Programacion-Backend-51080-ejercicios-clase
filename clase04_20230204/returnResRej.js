function dividir(dividendo, divisor) {
    return new Promise((res, rej) => {
        if (divisor == 0) {
            rej("No se puede dividir por 0");
            // return
            console.log("hola...!!!")
            console.log("¿esto se ejecutará?")

        } else {
            res(dividendo / divisor);
            // return 
        }

        console.log("¿y esto...?");
    });
}

const env=async ()=>{

    try {
        
        // console.log(await dividir(10,2));
    
        console.log(await dividir(10,0));

    } catch (error) {
        console.log(error);
    }


}

env();