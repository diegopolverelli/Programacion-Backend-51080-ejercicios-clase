// const contador=(()=>{
//     let contador=0;

//     function add(){
//         contador++;
//     }
//     function dec(){
//         if (contador==0) return;
//         contador--;
//     }
//     function getContador(){return contador;}

//     return {add, dec}

// })();

// contador.add();
// contador.add();
// contador.add();
// contador.dec();
// console.log(contador.getContador());



class Controlador{
    static #activo=true;
    constructor(equipo, sector="C", responsable="", estado=true){
        this.equipo=equipo;
        this.sector=sector;
        this.responsable=responsable;
        this.activo=estado;
    }

    cambiaEstado(){
        this.activo=!this.activo;
        return this.activo;
    }

    static cambiaEstadoGeneral(estado){
        Controlador.#activo=estado;
        return Controlador.#activo;
    }

}

let equipo1=new Controlador("XVZ81","Logistica","Raúl Lopez",true);
let equipo2=new Controlador("XVZ99","Ventas","Marina Begerman",true);


console.log(Controlador.cambiaEstadoGeneral(
    equipo1.cambiaEstado(false) || equipo2.cambiaEstado(true)
    ));
    
// console.log(equipo1.cambiaEstado(false) || equipo2.cambiaEstado(true));






// const p = `Un hombre se confunde, gradualmente, con la firma
// de su destino; 
// un hombre es, a la larga,
// sus circunstancias."`;

// console.log("Con replace 'solo': ",p.replace('hombre', 'HOMBRE'));
// // solo reemplaza el primer "hombre"

// const regex = /Hombre/ig;
// console.log("Con replace, pero utilizando RegExp",p.replace(regex, 'HOMBRE'));
// // reemplaza ambas apariciones de "hombre", por la "g"
// // con que finaliza la expresión regular

// console.log("Con replaceAll: ",p.replaceAll('hombre', 'HOMBRE'));
// // reemplaza ambas apariciones de "hombre"

