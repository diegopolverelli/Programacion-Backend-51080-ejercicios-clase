import { UsuariosDto } from "../dto/usuariosDto.js"


export class UsuariosService{
    constructor(dao){
        this.dao=dao
    }

    async obtenerUsuarios(){
        return await this.dao.get()
    }

    async obtenerUsuarioPorNombre(nombre){
        let usuarios= await this.dao.get()
        return usuarios.find(u=>u.nombre==nombre)
    }

    async obtenerUsuarioPorApellido(apellido){
        let usuarios= await this.dao.get()
        return usuarios.find(u=>u.apellido==apellido)
    }


    async grabaUsuario(usuario){
        return await this.dao.save(new UsuariosDto(usuario))
    }

}