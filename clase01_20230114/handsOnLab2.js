
//handsOnLab2
class Contador{
    constructor(responsable){
        this.responsable=responsable;
        this.contador=0;
        // Contador.contadorGlobal++;
    }
    
    static contadorGlobal=0;
    
    static getContadorGlobal(){
        return Contador.contadorGlobal;
    }

    getResponsable(){
        return this.responsable;
    }

    contar(){
        this.contador++;
        Contador.contadorGlobal++;
    }

    contadorIndividual(){
        return this.contador;
    }


}

let cont1=new Contador("Laura");
let cont2=new Contador("Esteban");

cont1.contar();
cont1.contar();
cont1.contar();
console.log(cont1.getResponsable());
console.log(cont1.contadorIndividual());

cont2.contar();
cont2.contar();
console.log(cont2.getResponsable());
console.log(cont2.contadorIndividual());

console.log(Contador.getContadorGlobal());
