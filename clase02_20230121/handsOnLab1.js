// falta desarrollar esta parte de crear la clase evento, era solo una alternativa...
// class Evento{
//     constructor(nombre, lugar, precio, capacidad=50, fecha=new Date().toLocaleDateString()){
//         this.nombre=nombre;
//         this.lugar=lugar;
//     }
// }

class TicketManager{
    #precioBaseGanancia=0.15;

    constructor(){
        this.eventos=[];
    }

    getEventos(){
        return this.eventos;
    }

    // nuevoEvento2(Evento){

    // }

    nuevoEvento(nombre, lugar, precio, capacidad=50, fecha=new Date().toLocaleDateString()){
        let nuevoEvento={
            nombre:nombre,
            lugar:lugar,
            precio:precio+precio*this.#precioBaseGanancia,
            capacidad:capacidad,
            fecha:fecha,
            participantes:[],

        }

        if(this.eventos.length===0){
            nuevoEvento.id=1;
        }else{
            nuevoEvento.id=this.eventos.length+1;
        }

        this.eventos.push(nuevoEvento);

    }

    agregarUsuario(idEvento, idUsuario){
        let posicion=this.eventos.findIndex(evento=>evento.id===idEvento);
        if(posicion===-1){
            console.log(`No existe el evento ${idEvento}`);
            return
        }else{
            let participante=this.eventos[posicion].participantes.findIndex(participante=>participante===idUsuario);
            if (participante===-1){
                participante=this.eventos[posicion].participantes.push(idUsuario);
            }else{
                console.log(`En el evento ${idEvento} ya se encuentra dado de alta el participante ${idUsuario}`);
            }
        }
    }

    ponerEventoEnGira(idEvento, lugar, fecha){
        let posicion=this.eventos.findIndex(evento=>evento.id===idEvento);
        if(posicion===-1){
            console.log(`No existe el evento ${idEvento}`);
            return
        }else{
            let nuevoEvento={
                ...this.eventos[posicion],
                lugar:lugar,
                fecha:fecha,
                id:this.eventos.length+1,
                participantes:[]
            }

            this.eventos.push(nuevoEvento);            
        }

    }


}

let tm=new TicketManager();
tm.nuevoEvento("Clase 3","Virtual",100,50,new Date(2023,0,28,10,00).toLocaleDateString())
tm.nuevoEvento("Clase 4","Virtual",100,50,new Date(2023,1,4,10,00).toLocaleDateString())
tm.nuevoEvento("Repaso...","Virtual",100,50)

// let nuevoEvento=new Evento("Clase 5", "Virtual");
// tm.nuevoEvento2(nuevoEvento);

tm.agregarUsuario(2,"Diego");
tm.agregarUsuario(2,"Diego");
tm.agregarUsuario(1,"Diego");
tm.agregarUsuario(1,"Laura");
tm.agregarUsuario(1,"Macarena");
tm.agregarUsuario(2,"Florencia");

tm.ponerEventoEnGira(2,"también en remoto...",new Date(2023,1,5).toLocaleDateString());

tm.agregarUsuario(4,"Florencia");
tm.agregarUsuario(4,"Rafael");


console.log(tm.getEventos());


