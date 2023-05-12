import { usuarioDao } from "../dao/index.js"


export class UsuariosService{

    static async getUsuarios(){
        return await usuarioDao.get()
    }

    static async getUsuarioByEmail(email){
        return await usuarioDao.getBy({correo:email})
    }

    static async getUsuarioById(id){
        return await usuarioDao.getBy({_id:id})
    }

    static async grabaUsuario(usuario){
        return await usuarioDao.save(usuario)
    }

    static async actualizaUsuario(usuario){
        return await usuarioDao.update({_id:usuario.id},usuario)
    }
}