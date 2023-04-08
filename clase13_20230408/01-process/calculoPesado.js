process.on('message',(mensaje)=>{

    console.log(`Soy el proceso 'procesoPesado.js' y me llegó el siguiente mensaje: ${mensaje}`)

    let resultado=0;
    
    for(let i=1;i<20_000_000_000;i++){
        resultado+=i
    }
    
    process.send(resultado)

})
