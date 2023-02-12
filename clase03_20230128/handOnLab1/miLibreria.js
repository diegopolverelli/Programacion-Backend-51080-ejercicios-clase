
const fs = require('fs');



// ruta='./usuarios.json';

class managerUsuarios {

    constructor(archivo) {
        this.path = archivo;
    }

    async consultaUsuarios() {
        if (fs.existsSync(this.path)) {
            let lectura = await fs.promises.readFile(this.path, "utf-8");
            return JSON.parse(lectura);

        } else {
            return [];
        }
    }

    async consultaUsuario(username) {
        if (fs.existsSync(this.path)) {

            let usuarios = await fs.promises.readFile(this.path, "utf-8");
            usuarios = JSON.parse(usuarios);

            let indice = usuarios.findIndex(us => us.username === username);

            if (indice === -1) {
                console.log("El usuario no existe");
                return [];

            } else {
                console.log("Salio por acá...!!!: ",usuarios[indice]);
            }
        }else{
            console.log("El usuario no existe");
        }
    }


    async agregarUsuarios(usuario){
            let usuarios = await this.consultaUsuarios();

            let indice = usuarios.findIndex(us => us.username === usuario.username);

            if (indice === -1) {
                usuario.id = usuarios.length + 1;

                usuarios.push(usuario);
                await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, 5));
            } else {
                console.log(`El usuario ${usuario.username} ya existe en ${this.path}`);
            }


        }

    }

module.exports = managerUsuarios;

