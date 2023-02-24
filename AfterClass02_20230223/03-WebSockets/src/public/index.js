console.log("Hola...!!!");

let divTemperatura=document.getElementById('temperatura');
let divHeroe=document.querySelector('#heroe');

let socket=io("http://localhost:3000"); // viene de la librería socket.io/socket.io.js (librería para cliente que pone a disposición socket.io)

socket.on('lecturaTemperatura',(temperatura)=>{
    divTemperatura.innerHTML=temperatura;
})

socket.on('nuevoHeroeCreado',(heroe)=>{
    divHeroe.innerHTML=`Se ha creado el heroe ${heroe}`

    // document.location.href='/onlineProductos'  // algo así es lo que imagino van a tener que hacer ustedes en el desafio

})
