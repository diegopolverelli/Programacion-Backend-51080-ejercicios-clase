// import mongoose from 'mongoose'

// const juguetesColeccion='juguetes'
// const juguetesEsquema=new mongoose.Schema({
//     nombre: String, precio: Number
// },{
// collection:'superProductosDeJugueteria',
// timestamps:true
// })

// export const juguetesModelo=mongoose.model(juguetesColeccion,juguetesEsquema)

export const juguetesRef={
    coleccion:'juguetes',
    esquema:{nombre:String, precio:Number}
}