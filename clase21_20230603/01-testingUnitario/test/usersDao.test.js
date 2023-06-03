import Users from '../src/dao/Users.dao.js'
import mongoose from 'mongoose';
import Assert from 'assert'

await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase21')

const assert=Assert.strict;


describe('Testing Users Dao',()=>{

    before(function(){
        this.usersDao=new Users()
        this.timeout(5000)
    })

    beforeEach(async function(){
        await mongoose.connection.collection('users').deleteMany({email:'jromero@test.com'})
    })

    after(async function(){
        await mongoose.connection.collection('users').deleteMany({email:'jromero@test.com'})
    })

    it('El dao debe devolver un array de usuarios, al ejecutar su método get',async function(){
        let result=await this.usersDao.get();
        // console.log(result)

        assert.strictEqual(Array.isArray(result),true)
    })

    it('El dao graba un usuario, con su método save',async function(){
        let userTest={
            first_name:'Juan',
            last_name:'Romero',
            email:'jromero@test.com',
            password:'123'
        }
        
        let result = await this.usersDao.save(userTest)
        // console.log(result)
        assert.ok(result._id)
        assert.strictEqual(result.email,'jromero@test.com')
        assert.equal(result.email,'jromero@test.com')


    })

    it('El dao debe guardar un usuario con su método save, y asignarle una propiedad pets, igual a un array vacío',async function(){
        let userTest={
            first_name:'Juan',
            last_name:'Romero',
            email:'jromero@test.com',
            password:'123'
        }

        let result = await this.usersDao.save(userTest)

        assert.deepStrictEqual(result.pets, [])

    })

})
