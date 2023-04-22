import { UsuariosDBDao } from "../dao/usuariosDBDao.js";
import { UsuariosMemoryDao } from "../dao/usuariosMemoryDao.js";
import { UsuariosDto } from "../dto/usuariosDto.js";
import { config } from "../config/config.js";

export class UsuariosService{
    constructor(dao){
        this.dao=dao
    }

    async getUsuarios(){
        return await this.dao.get()
    }

    async crearUsuario(usuario){
        return await this.dao.save(new UsuariosDto(usuario))
    }
}

