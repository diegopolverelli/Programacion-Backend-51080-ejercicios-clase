import { usuariosModelo } from "./models/usuarios.model.js";


export class UsuariosMysqlDAO{

    static async getUsuarios(){
        return await usuariosModelo.findAll()
    }

    static async getUsuarioById(id){
        return await usuariosModelo.findOne({where: {id:id}})
    }

    static async getUsuarioByEmail(email){
        return await usuariosModelo.findOne({where: {email:email}})
    }

    static async createUsuario(usuario){
        return await usuariosModelo.create(usuario)
    }

    static async updateUsuario(id, usuario){
        let resultado = await usuariosModelo.update(usuario, {where: {id}})
        console.log(resultado)

        if (resultado[0]>0) {
            return await UsuariosMysqlDAO.getUsuarioById(id)
        }else return null 
    }

    static async deleteUsuario(id){
        let resultado = await usuariosModelo.destroy({where: {id}})
        console.log(resultado)

        return resultado
    }

}