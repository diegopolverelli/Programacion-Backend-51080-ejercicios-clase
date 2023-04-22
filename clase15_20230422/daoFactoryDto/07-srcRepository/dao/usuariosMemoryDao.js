// import { UsuariosDto } from "../dto/usuariosDto.js";


export class UsuariosMemoryDao{
    constructor(){
        this.usuarios=[]
    }

    get(){
        return this.usuarios
    }

    save(usuario){

        // definir el id:
        if(this.usuarios.length==0){
            usuario.id=1
        }else{
            let lastId=this.usuarios[this.usuarios.length-1].id
            usuario.id=lastId+1
        }

        this.usuarios.push(usuario)

        return usuario

    }

}