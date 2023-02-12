// let contador=0;
// const add=()=>{
//     contador++;}

// contador=7;

// closure:
let persona=(()=>{
    let nombre="";
    let apellido="";

    const setNombre=(nombre1)=>{
        nombre=nombre1;
    }

    const setApellido=(ape1)=>{
        apellido=ape1;
    }


    const getNombre=()=>{
        return nombre;
    }

    const getApellido=()=>{
        return apellido;
    }

    return{setApellido, setNombre, getApellido, getNombre}

})();

persona.setNombre("Manuel");
console.log(persona.getNombre());


// handsOnLab2:
const manejaContador=(()=>{
    let contador=0;
    const add=()=>{
        contador++;
    }
    const getContador=()=>{
        return contador;
    }

    return{add, getContador}

})();

manejaContador.add();
manejaContador.add();
manejaContador.add();
manejaContador.add();
console.log(manejaContador.getContador());


