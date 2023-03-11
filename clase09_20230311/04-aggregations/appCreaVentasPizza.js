import mongoose from 'mongoose';

const sabor=['Muzza','Calabresa','Primavera','Napolitana','JyM','Huevo']
const precio=[1200,1500,1800,1200,1500,1200]
const size=['grande','chica','individual']
const sucursal=['Beiro y Gral. Paz','Mataderos','Parque Patricios','Castelar Norte','Castelar Sur', 'Barracas']

const ventas=[];

for(let i=0;i<1000;i++){
    let a1=Math.round(Math.random()*(sabor.length-1))
    let a2=Math.round(Math.random()*(size.length-1))
    let a3=Math.round(Math.random()*(sucursal.length-1))
    let cantidad=Math.round(Math.random()*19+1);

    ventas.push({
        orden:i+1,
        size:size[a2],
        sabor:sabor[a1],
        precio:precio[a1],
        cantidad,
        importe: cantidad*precio[a1],
        sucursal: sucursal[a3]
    })
}

const ventasCol='ventas'

const ventasEsquema=new mongoose.Schema({
    orden:Number,
    sabor:String,
    size:String,
    precio:Number, 
    cantidad:Number,
    importe:Number, 
    sucursal:String
})

const ventasModelo=mongoose.model(ventasCol,ventasEsquema);

const env=async()=>{
    try {
        // await mongoose.connect('mongodb://localhost:27017/pruebas_indices')
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=base_clase9')
        console.log(`Conexión a DB establecida`);

        await ventasModelo.deleteMany({});
        await ventasModelo.insertMany(ventas)
        // console.log(await ventasModelo.find())
        console.log("Coleccion ventas creada...!!!")
        process.exit()

    } catch (error) {
        console.log(`Error en la app: ${error}`);
    }
}

env()