const managerUsuarios = require("./miLibreria");

let mu=new managerUsuarios("./usuarios.json");

// mu.consultaUsuarios().then(usuarios=>{
//     console.log(`Lectura inicial del archivo ${mu.path}: `,usuarios, `
    
// ________________________________________    
// ________________________________________    


//     `);
// });

// let usuario={
//     nombre:"Gabriel",
//     username:"Medina",
//     apellido:"Medina",
//     edad: 58
// }

// mu.agregarUsuarios(usuario).then(res=>{
 
// });

// mu.consultaUsuario("Pablito0009");
// mu.consultaUsuario("Cosetti");


const env=async()=>{
    // let usuarios=await mu.consultaUsuarios();
    // console.log(usuarios);

    let usuario={
        nombre:"Gabriel",
        username:"Medina",
        apellido:"Medina",
        password:"Simuladores2023",
        edad: 58
    }
    
    await mu.agregarUsuarios(usuario);
    
    // await mu.consultaUsuario("Pablito0009");
    // await mu.consultaUsuario("Cosetti");

    // console.log(mu.crearHash("Diego2023...Diego20203"));
    // console.log(mu.crearHash("123"));

    await mu.validaUsuario("Medina","123456");
    await mu.validaUsuario("Medina","Simuladores2023");

}

env();