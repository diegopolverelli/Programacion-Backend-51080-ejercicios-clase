import UserDTO from "../src/dto/User.dto.js";

import chai from 'chai'


const expect = chai.expect;

describe('Prueba DTO usuarios',()=>{

    // ver si necesito before, after, etc...

    it('Recibo un usuario en el DTO, y me concatena las propiedades first_name y last_name en una "name"', ()=>{
        let user={
            first_name:'Diego', last_name:'Polverelli', role:'user', email:'diego@test.com'
        }

        let result=UserDTO.getUserTokenFrom(user);

        expect(result).to.have.property('name').and.to.be.equal(user.first_name+' '+user.last_name)
        expect(result.first_name).not.exist
        expect(result).to.have.property('role').and.to.be.equal(user.role)
    })

})