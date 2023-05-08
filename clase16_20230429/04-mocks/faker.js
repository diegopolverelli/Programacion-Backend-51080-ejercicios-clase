import {faker} from '@faker-js/faker';
import express from 'express'
import fs from 'fs'

const app=express()
app.listen(3000,()=>{
    console.log("Server OK...!!!")
})

app.get('/usuarios/:cantidad',(req,res)=>{
    let usuarios=[]
    for(let i=0;i<=req.params.cantidad;i++){
        usuarios.push(generaUsuario())
    }

    res.json({usuarios})
})

app.get('/usuariosFile/:cantidad',(req,res)=>{
    let usuarios=[]
    for(let i=0;i<=req.params.cantidad;i++){
        usuarios.push(generaUsuario())
    }

    fs.writeFileSync('./usuarios.json',JSON.stringify(usuarios,null,5))

    res.json({usuarios})
})


faker.locale='es'

// console.log(faker.name.firstName())
// console.log(faker.name.lastName())
// console.log(faker.animal.cat())
// console.log(faker.internet.password())
// console.log(faker.database.mongodbObjectId())

// let genero=faker.name.sex()
// let nombre=faker.name.firstName(genero)
// let apellido=faker.name.lastName()
// let email=faker.internet.email(nombre+'_'+apellido)


// console.log({
//     nombre, genero, apellido, email
// })

const generaProducto=()=>{
    return {
        codigo:faker.random.alphaNumeric(5),
        descrip:faker.commerce.product(),
        cantidad:+faker.random.numeric(2),
        precio:faker.commerce.price()
    }
}

const generaUsuario=()=>{

    let carrito=[]
    for(let i=0; i<= +faker.random.numeric(1,{bannedDigits:['0']}); i++){
        carrito.push(generaProducto())   
    }

    return {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        domicilio: faker.address.direction(),
        carrito
    }
}

console.log(generaUsuario())

