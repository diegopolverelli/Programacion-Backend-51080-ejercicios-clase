import mongoose from "mongoose";

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

const empleadosGastos=[
    {
        nombre: 'Pedro', apellido:'Barrios', ciudad:'Ciudadela', zona:'Oeste',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:12000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:6000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:10000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:20000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:9000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },

        ]
    },
    {
        nombre: 'Juan Manuel', apellido:'Ortega', ciudad:'Banfield', zona:'Sur',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:13000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:12000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:10000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:5000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },

        ]
    },
    {
        nombre: 'Jimena', apellido:'Gaitan', ciudad:'Moreno', zona:'Oeste',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:30000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:12000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:8000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:15000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:5000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:10000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:14000
                    },

                ]
            },

        ]
    },
    {
        nombre: 'Ramon', apellido:'Benitez', ciudad:'Rafael Castillo', zona:'Oeste',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:3000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:12000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:15000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:10000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:5000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },

        ]
    },
    {
        nombre: 'Micaela', apellido:'Quintana', ciudad:'Ciudadela', zona:'Oeste',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:8000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:11000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:9000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:10000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:10000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:10000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:7000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:10000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:14000
                    },

                ]
            },

        ]
    },

]

const gastosColeccion='gastos';
const gastosEsquema=new mongoose.Schema({
    nombre:String, 
    apellido: String,
    ciudad: String, 
    zona: String,
    gastos:[
        {
            periodo:String,
            conceptos:[
                {
                    codigo:Number,
                    descrip:String,
                    importe:Number
                }
            ]
        }
    ]
});

const gastosModelo=mongoose.model(gastosColeccion, gastosEsquema);

const estudiantes = [
    { "first_name": "Justino", "last_name": "Fidgin", "email": "jfidgin0@boston.com", "gender": "Male", "grade": 6, "group": "1B" },
    { "first_name": "Ketty", "last_name": "Robson", "email": "krobson1@prlog.org", "gender": "Female", "grade": 10, "group": "2A" },
    { "first_name": "Dierdre", "last_name": "Barron", "email": "dbarron2@dailymail.co.uk", "gender": "Female", "grade": 9, "group": "1B" },
    { "first_name": "Nana", "last_name": "Pellew", "email": "npellew3@nytimes.com", "gender": "Female", "grade": 6, "group": "1A" },
    { "first_name": "Shannan", "last_name": "Preshous", "email": "spreshous4@paginegialle.it", "gender": "Male", "grade": 8, "group": "2B" },
    { "first_name": "Mark", "last_name": "Yurchishin", "email": "iyurchishin5@google.it", "gender": "Male", "grade": 10, "group": "2B" },
    { "first_name": "Tannie", "last_name": "Takkos", "email": "ttakkos6@mtv.com", "gender": "Female", "grade": 7, "group": "2B" },
    { "first_name": "Debbi", "last_name": "Eddowis", "email": "deddowis7@jigsy.com", "gender": "Female", "grade": 6, "group": "1B" },
    { "first_name": "Dugald", "last_name": "Toun", "email": "dtoun8@java.com", "gender": "Male", "grade": 4, "group": "1A" },
    { "first_name": "Lorain", "last_name": "Judkin", "email": "ljudkin9@bigcartel.com", "gender": "Genderqueer", "grade": 8, "group": "2B" },
    { "first_name": "Shelley", "last_name": "Crinion", "email": "scriniona@wsj.com", "gender": "Genderfluid", "grade": 8, "group": "2A" },
    { "first_name": "Kellyann", "last_name": "Doel", "email": "kdoelb@merriam-webster.com", "gender": "Female", "grade": 8, "group": "1B" },
    { "first_name": "Romona", "last_name": "Derricoat", "email": "rderricoatc@vkontakte.ru", "gender": "Female", "grade": 5, "group": "1A" },
    { "first_name": "Lorine", "last_name": "McVaugh", "email": "lmcvaughd@unc.edu", "gender": "Female", "grade": 4, "group": "2A" },
    { "first_name": "Ker", "last_name": "Chiese", "email": "kchiesee@prlog.org", "gender": "Male", "grade": 8, "group": "1A" },
    { "first_name": "Aloisia", "last_name": "Hovie", "email": "ahovief@simplemachines.org", "gender": "Female", "grade": 8, "group": "2B" },
    { "first_name": "Marshall", "last_name": "Chatten", "email": "mchatteng@creativecommons.org", "gender": "Male", "grade": 9, "group": "2B" },
    { "first_name": "Marcelo", "last_name": "Rubega", "email": "mrubegah@house.gov", "gender": "Male", "grade": 6, "group": "1A" },
    { "first_name": "Yves", "last_name": "Halsey", "email": "yhalseyi@naver.com", "gender": "Male", "grade": 5, "group": "2A" },
    { "first_name": "Corene", "last_name": "Greed", "email": "cgreedj@epa.gov", "gender": "Female", "grade": 8, "group": "1A" }
]

const estudiantesCol = 'estudiantes'

const estudiantesEsquema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String,
})

const estudiantesModelo = mongoose.model(estudiantesCol, estudiantesEsquema);


let encuesta=[
    {
        candidato:'CANDIDATO A',
        partidoo:'ROJO',
        presupuesto:3000000,
        datos:[
            {
                rangoEtario:'jovenes',
                votos:100
            },
            {
                rangoEtario:'mayores',
                votos:150
            },
        ]
    },
    {
        candidato:'CANDIDATO B',
        partidoo:'VERDE',
        presupuesto:1500000,
        datos:[
            {
                rangoEtario:'jovenes',
                votos:200
            },
            {
                rangoEtario:'mayores',
                votos:30
            },
        ]
    },
    {
        candidato:'CANDIDATO C',
        partidoo:'AZUL',
        presupuesto:700000,
        datos:[
            {
                rangoEtario:'jovenes',
                votos:20
            },
            {
                rangoEtario:'mayores',
                votos:200
            },
        ]
    }

]

const encuestaColeccion='encuesta'
const encuestaEsquema=new mongoose.Schema({
    candidato:String,
    partido:String,
    presupuesto: Number,
    datos:[
        {
            rangoEtario:String,
            votos:Number
        },
    ]
},{collection:'encuesta'})

const encuestaModelo=mongoose.model(encuestaColeccion, encuestaEsquema);

const env = async () => {
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.v8ivmdl.mongodb.net/?retryWrites=true&w=majority&dbName=afterClass04')
        console.log(`Conexión a DB establecida...!!!`)

        await ventasModelo.deleteMany({});
        await ventasModelo.insertMany(ventas)
        // console.log(await ventasModelo.find())
        console.log("Coleccion ventas creada...!!!")

        await estudiantesModelo.deleteMany({});
        await estudiantesModelo.insertMany(estudiantes)
        // console.log(await ventasModelo.find())
        console.log("Coleccion estudiantes creada...!!!")

        await gastosModelo.deleteMany({});
        await gastosModelo.insertMany(empleadosGastos);
        console.log("Coleccion gastos creada...!!!")

        await encuestaModelo.deleteMany({});
        await encuestaModelo.insertMany(encuesta);
        console.log("Coleccion encuesta creada...!!!")

        process.exit()


    } catch (err) {
        console.log(`Error de conexión a la base de datos :( ${err}`)
    }
}


env();