
export class UsuariosDto{
    constructor(usuario){
        this.nombre=usuario.first_name
        this.apellido=usuario.last_name
        this.nombreCompleto=usuario.first_name+' '+usuario.last_name
        this.deleted=false
    }
}