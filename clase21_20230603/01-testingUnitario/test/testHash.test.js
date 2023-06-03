import { createHash, passwordValidation } from "../src/utils/index.js";
import chai from 'chai'

const expect=chai.expect;

describe('Testing funciones Hash',()=>{

    //ver si necesito before, beforeEach, afer, etc...

    it('Ver si createHash codifica de manera adecuada un string enviado',async function(){
        let password='123'
        let result=await createHash(password)
        // console.log(result)

        expect(result).not.to.be.equal("123")
        expect(result.length).to.be.equal(60)
        expect(result.length).to.be.greaterThan(3)
    })

    it('prueba de que passwordValidation compara de forma adecuada un password con sun hash',async function(){
        let passwordHash=await createHash('123');
        let user={
            password:passwordHash
        }

        let result=await passwordValidation(user, "123")

        expect(result).to.be.equal(true)

        result=await passwordValidation(user, "123456")

        expect(result).to.be.equal(false)

    })


})