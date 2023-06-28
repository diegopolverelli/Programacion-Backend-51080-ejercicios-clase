import Users from '../dao/dbManagers/users.js';
const usersManager = new Users();

export class UsersService{

    async getAllUsers(){
        return await usersManager.getAll();
    }
    
    async getUserByEmail(email){
        return await usersManager.getBy({email:email})
    }

    async getUserById(id){
        return await usersManager.getBy({_id:id})
    }

    async createUser(user){
        console.log('Servicio ejecutado...!!!')
        return await usersManager.saveUser(user)
    }

    async updateUser(id, user){
        return await usersManager.updateUser(id, user)
    }


}