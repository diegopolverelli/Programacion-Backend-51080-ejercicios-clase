import chai from 'chai'
import supertest from 'supertest'
import mongoose from 'mongoose'
import fs from 'fs'

await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase21')

const expect=chai.expect;
const requester=supertest('http://localhost:8080')

describe('Testing app Adoptme',()=>{

    after(async function(){
        await mongoose.connection.collection('pets').deleteMany({specie:'testing'})
    })

    describe('Test endpoints router pets',()=>{

        // ver si hacen falta before, after, etc.

        it('El endpoint POST /api/pets/ debe permitir crear una mascota',async function(){
            const petTest={
                name:'Rocky', specie:'testing', birthDate:'04-04-2020'
            }

            let {statusCode, body}=await requester.post('/api/pets').send(petTest)

            // console.log(statusCode)
            // console.log(body)
            // console.log(result)

            expect(body.payload).to.have.property('_id')
            expect(body.payload._id).exist
            expect(statusCode).to.be.equal(200)

        })

        it('El endpoint POST /api/pets/ si no recibe algún dato, debe devolver error con un status code == 400',async function(){
            const petTest={
                specie:'dog', birthDate:'04-04-2020'
            }

            let {statusCode}=await requester.post('/api/pets').send(petTest)

            // console.log(statusCode)
            // console.log(body)
            // console.log(result)

            expect(statusCode).to.be.equal(400)

        })

        it('El endpoint POST /api/pets/ debe permitir crear una mascota, y debe crear una propiedad adopted = false',async function(){
            const petTest={
                name:'Rocky', specie:'testing', birthDate:'04-04-2020'
            }

            let {body}=await requester.post('/api/pets').send(petTest)

            // console.log(statusCode)
            // console.log(body)
            // console.log(result)

            expect(body.payload).to.have.property('adopted').and.to.be.false

        })

        it('El endpoint delete /api/pets debe eliminar una mascota previamente creada',async function(){
            const petTest={
                name:'Rocky', specie:'testing', birthDate:'04-04-2020'
            }

            let {body}=await requester.post('/api/pets').send(petTest)

            let idPetCreado=body.payload._id

            let resultado=await requester.delete('/api/pets/'+idPetCreado)

            expect(resultado.body.message).to.be.equal('pet deleted')

            let {body:body2} = await requester.get('/api/pets')
            // console.log(body2)
            let mascota=body2.payload.find(m=>m._id==idPetCreado)

            expect(mascota).not.to.be.ok;
        })

    }) // fin describe pets

    describe('Probar subida de archivos',()=>{

        it('mi endpoint POST /api/pets/withimage me permita subir una foto de una mascota creada',async function(){

            const petTest={
                name:'Rocky', specie:'testing', birthDate:'04-04-2020'
            }

            let {statusCode, body}=await requester.post('/api/pets/withimage').field('name',petTest.name)
                                                                              .field('specie',petTest.specie)
                                                                              .field('birthDate',petTest.birthDate)
                                                                              .attach('image','./test/perro.png')

                                                                              

            expect(statusCode).to.be.equal(200)
            // console.log(body)

            let resultado=fs.existsSync(body.payload.image)

            expect(resultado).to.be.true
            expect(resultado).to.be.equal(true)
            expect(resultado).ok

        })
    }) // fin describe que prueba upload archivos

    describe('Probar endpoins /api/sessions register, login y current',()=>{

        // before, beforeEach, etc... si hacen falta
        after(async function(){
            await mongoose.connection.collection('users').deleteMany({email:'rlopeztest@test.com'})
        })

        let cookie;

        it("el api/sessions/register, deber registrar un usuario en BD y devolver el _id que asigna MongoAtlas", async function(){
            const userTest={
                first_name: 'Raul', last_name:'Lopez', email:'rlopeztest@test.com', password:'123'
            }

            let {body}=await requester.post('/api/sessions/register').send(userTest)
            
            expect(body.payload).to.be.ok
            expect(body.payload).to.have.lengthOf(24)

        })

        it("el api/sessions/login debe devolver como payload el text Logged in y devolver la cookie coderCookie", async function(){
            let userLogin={
                email:'rlopeztest@test.com', password:'123'
            }

            let {body, headers}=await requester.post('/api/sessions/login').send(userLogin)
            
            // console.log(headers)
            const cookieRes=headers['set-cookie'][0]

            const splitCookie=cookieRes.split('=')
            const nameCookie=splitCookie[0]
            const valueCookie=splitCookie[1]

            cookie={
                nameCookie, valueCookie
            }

            // console.log(cookieRes)
            // console.log(splitCookie)
            // console.log(nameCookie)

            expect(body.message).to.be.ok
            expect(body.message).to.be.equal('Logged in')
            expect(nameCookie).to.be.equal('coderCookie')
            expect(valueCookie).to.be.ok

        })

        it('el api/sessions/current recibe una cookie llamada coderCookie y devuelve el usuario que esta dentro de esa cookie como un token', async function(){
            let resultado=await requester.get('/api/sessions/current').set('Cookie',`${cookie.nameCookie}=${cookie.valueCookie}`)
            // console.log(cookie)
            // console.log(resultado)
            expect(resultado.body.payload.email).to.be.equal('rlopeztest@test.com')

        })


    })

})
