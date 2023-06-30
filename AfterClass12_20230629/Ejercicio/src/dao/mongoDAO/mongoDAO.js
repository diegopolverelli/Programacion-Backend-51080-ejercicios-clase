import { usuariosModelo } from "./models/usuarios.model.js";


export class UsuariosMongoDAO{

    static async getUsuarios(){
        return await usuariosModelo.find()
    }

    static async getUsuarioById(id){
        return await usuariosModelo.findOne({_id:id})
    }

    static async getUsuarioByEmail(email){
        return await usuariosModelo.findOne({email:email})
    }

    static async createUsuario(usuario){
        return await usuariosModelo.create(usuario)
    }

    static async updateUsuario(id, usuario){
        let resultado = await usuariosModelo.updateOne({_id:id},usuario)
        console.log(resultado)

        if (resultado.modifiedCount>0) {
            return await UsuariosMongoDAO.getUsuarioById(id)
        }else return null 
    }

    static async deleteUsuario(id){
        let resultado = await usuariosModelo.deleteOne({_id:id})
        console.log(resultado)

        if (resultado.deletedCount>0) {
            return resultado
        }else return null 
    }

}