const managerUsuarios = require("./miLibreria");

let mu=new managerUsuarios("./usuarios.json");

mu.consultaUsuarios().then(usuarios=>{
    console.log(`Lectura inicial del archivo ${mu.path}: `,usuarios, `
    
________________________________________    
________________________________________    


    `);
});

let usuario={
    nombre:"Emilio",
    username:"Cosetti",
    apellido:"Ravena",
    edad: 58
}

mu.agregarUsuarios(usuario).then(res=>{
 
});

mu.consultaUsuario("Pablito0009");
mu.consultaUsuario("Cosetti");