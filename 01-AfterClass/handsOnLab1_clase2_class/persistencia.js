// falta desarrollar esta parte de crear la clase evento, era solo una alternativa...
// class Evento{
//     constructor(nombre, lugar, precio, capacidad=50, fecha=new Date().toLocaleDateString()){
//         this.nombre=nombre;
//         this.lugar=lugar;
//     }
// }

class Evento{
    constructor(nombre, lugar, precio, capacidad=50, fecha=new Date().toLocaleDateString()){
        this.nombre=nombre;
        this.lugar=lugar;
        this.precio=precio;
        this.capacidad=capacidad;
        this.fecha=fecha;
        this.participantes=[];
    }
}

const fs=require('fs');

class TicketManager{
    #precioBaseGanancia=0.15;

    constructor(file){
        // this.eventos=[];
        this.eventos=this.recuperaEventos();
        this.file=file;
    }

    getEventos(){
        return this.eventos;
    }

    recuperaEventos(){
        if(fs.existsSync(this.file)){
            return JSON.parse(fs.readFileSync(this.file,"utf-8"));
        }else{
            return [];
        }
    }

    grabaEventos(){
        fs.writeFileSync(this.file,JSON.stringify(this.eventos, null, 5));
    }

    nuevoEvento2(nuevoEvento){
        if(this.eventos.length===0){
            nuevoEvento.id=1;
        }else{
            nuevoEvento.id=this.eventos.length+1;
        }

        this.eventos.push(nuevoEvento);
        this.grabaEventos();

    }

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
        this.grabaEventos();

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
                this.grabaEventos();
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
            this.grabaEventos();

        }

    }


}

let tm=new TicketManager('../files/eventos.txt');
tm.nuevoEvento("Clase 3","Virtual",100,50,new Date(2023,0,28,10,00).toLocaleDateString())
tm.nuevoEvento("Clase 4","Virtual",100,50,new Date(2023,1,4,10,00).toLocaleDateString())
tm.nuevoEvento("Repaso...","Virtual",100,50)

let nuevoEvento=new Evento("AfterClass", "Virtual-desde nuevoEvento2",200,40);
tm.nuevoEvento2(nuevoEvento);

tm.agregarUsuario(2,"Diego");
tm.agregarUsuario(2,"Diego");
tm.agregarUsuario(1,"Diego");
tm.agregarUsuario(1,"Laura");
tm.agregarUsuario(1,"Macarena");
tm.agregarUsuario(2,"Florencia");

tm.ponerEventoEnGira(2,"también en remoto...",new Date(2023,1,5).toLocaleDateString());

tm.agregarUsuario(4,"Florencia");
tm.agregarUsuario(4,"Rafael");


// console.log(tm.getEventos());
let eventos={};
tm.getEventos().forEach((e,i) => {
    let nombreObj="evento_"+e.id.toString();
    eventos[nombreObj]=e;
});
console.log({eventos});



let tm2=new TicketManager('../files/eventos2.txt');
tm2.nuevoEvento("Concierto Divididos","Movistar Arena",6000,50000,new Date(2023,1,27,22,00).toLocaleDateString())
tm2.nuevoEvento("Concierto Los Autenticos Decadentes","Estadio Malvinas Argentinas",4200,10000,new Date(2023,2,15,21,30).toLocaleDateString())
tm2.ponerEventoEnGira(2,"Estadio Velez Sarfield",new Date(2023,1,5).toLocaleDateString());

