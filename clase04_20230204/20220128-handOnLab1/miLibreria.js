
const fs = require('fs');
const crypto=require('crypto');

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
                console.log(`El usuario ${username} no existe`);
                return [];

            } else {
                console.log(`Usuario "${username}"  ha sido encontrado con éxito. Estos son sus datos completos: 
                `,usuarios[indice]);
            }
        }else{
            console.log(`El usuario ${username} no existe`);
        }
    }

    crearHash(datos){

        let secretKey='MiClaveSecreta'
        return crypto.createHmac('sha256',secretKey).update(datos).digest("hex");
    }

    async agregarUsuarios(usuario){
            let usuarios = await this.consultaUsuarios();

            let indice = usuarios.findIndex(us => us.username === usuario.username);

            if (indice === -1) {
                usuario.id = usuarios.length + 1;

                if(usuario.password){
                    usuario.password=this.crearHash(usuario.password);
                }else{
                    console.log(`El usuario ${usuario.username} no tiene definida una propiedad password. Por favor ingresela...!!!`);
                    return 
                }

                usuarios.push(usuario);
                await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, 5));
            } else {
                console.log(`El usuario ${usuario.username} ya existe en ${this.path}`);
            }


        }

        async validaUsuario(username, password){
            let usuarios = await this.consultaUsuarios();

            let indice = usuarios.findIndex(us => us.username === username);

            if (indice === -1) {
                console.log(`El usuario ${usuario.username} no existe en ${this.path}`);
            }else{
                if(usuarios[indice].password==this.crearHash(password)){
                    console.log(`El usuario ${username} esta logueado...!!!`);
                }else{
                    console.log(`Usuario ${username}: contraseña incorrecta...!!!`);
                }
            }

        }

    }

module.exports = managerUsuarios;

