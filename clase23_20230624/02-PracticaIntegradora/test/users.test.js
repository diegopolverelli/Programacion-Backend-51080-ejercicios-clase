import chai from 'chai'
import mongoose from 'mongoose'
import supertest from 'supertest'


const expect= chai.expect
const requester=supertest('http://localhost:3000')


await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase23')


describe("Test a aplicación usuarios / cursos", ()=>{


    describe("Prueba módulo de usuarios", ()=>{

        before(function(){
            this.timeout(5000)
        })

        beforeEach(async function(){
            mongoose.connection.collection('users').deleteMany({email:'test9999@test.com'})
        })

        after(async function(){
            mongoose.connection.collection('users').deleteMany({email:'test9999@test.com'})
        })


        it("El endpoint /api/users en su método GET debe devolver un array de usuarios", async function(){

            const {statusCode, body}=await requester.get('/api/users')

            expect(statusCode).to.be.equal(200)
            expect(body.status).to.be.equal('success')
            expect(Array.isArray(body.payload)).to.be.true

        } )

        it("El endponint /api/users, en su metodo POST debe insertar un usuario en la BD", async function(){

            let usuario={
                first_name:"Pedro", 
                last_name:"Rodriguez",
                email:"test9999@test.com",
                password:"123", "gender":"M",
                dni:12345678, "birthDate":"03-03-2005"
              }

              const {statusCode, body}=await requester.post('/api/users').send(usuario)

              expect(statusCode).to.be.equal(200)
              expect(body.status).to.be.equal('success')
              expect(mongoose.Types.ObjectId.isValid(body.payload._id)).to.be.true
            
        })

        it("El endponint /api/users, en su metodo POST, si no envío x body todas las propiedades necesarias, devuelve error 400", async function(){

            let usuario={
                first_name:"Pedro", 
                last_name:"Rodriguez",
              }

              const {statusCode, body}=await requester.post('/api/users').send(usuario)

              expect(statusCode).to.be.equal(400)
            
        })

        it("El endponint /api/users, en su metodo POST, si quiero agregar un usuario existente, devuelve error status 400", async function(){

            let usuario={
                first_name:"Pedro", 
                last_name:"Rodriguez",
                email:"test9999@test.com",
                password:"123", "gender":"M",
                dni:12345678, "birthDate":"03-03-2005"
              }

              await requester.post('/api/users').send(usuario)
              const {statusCode, body}=await requester.post('/api/users').send(usuario)

              expect(statusCode).to.be.equal(400)
            
        })


    })



})