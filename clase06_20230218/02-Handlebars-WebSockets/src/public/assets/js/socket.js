// console.log("hola");
let nombre=prompt("Ingrese su nombre:");

let divMensajes=document.querySelector('#mensajes');
let textMensaje=document.querySelector('#mensaje');

textMensaje.addEventListener('keyup',(evento)=>{
    // console.log(evento.key, evento.keyCode, evento.target.value);
    if(evento.keyCode==13){
        if(evento.target.value.trim()!=''){
            socket.emit('mensaje',{
                emisor:nombre,
                mensaje:evento.target.value
            })
            textMensaje.value='';
            textMensaje.focus();
        }

    }
})

socket=io();

socket.on('hola',(objeto)=>{
    console.log(`${objeto.emisor} dice ${objeto.mensaje}`)

    socket.emit('respuestaAlSaludo',{
        emisor:nombre,
        mensaje:`Hola, desde el Frontend`
    })
})

socket.on('nuevoMensaje',(mensaje)=>{
    divMensajes.innerHTML+=`<br><strong>${mensaje.emisor}</strong> dice <i>${mensaje.mensaje}</i>`
})


socket.on('nuevoHeroe',(objeto)=>{
    divMensajes.innerHTML+=`<br>Se ha creado el heroe<strong> ${objeto.heroe.nombre}</strong>`
})