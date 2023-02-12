const managerUsuarios = require("./miLibreria");

let mu=new managerUsuarios("./usuarios.json");

mu.consultaUsuarios().then(usuarios=>{
    console.log(`Lectura inicial del archivo ${mu.path}: `,usuarios, `
    
________________________________________    
________________________________________    


    `);
});

let usuario={
    nombre:"Pablo",
    username:"Lampone",
    apellido:"Lampone",
    edad: 58
}

mu.agregarUsuarios(usuario).then(res=>{
 
});

mu.consultaUsuario("Pablito0009");
mu.consultaUsuario("Cosetti");
console.log("FIN");