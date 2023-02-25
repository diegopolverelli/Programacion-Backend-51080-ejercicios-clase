// Para ejecutar un script de JS desde mongosh: load("ruta del script.js") 
// Por ejemplo, para correr el presente script:
// load("C:\\Users\\diego\\dev\\CoderHouse\\DesafiosBackend-main\\Clase10Websockets\\clase\\02-mongoDB\\consultas.js");

// No todos los comandos funcionan. Por ej.: show dbs o show collections, 
// se tienen que ejecutar de otra forma. A continuación el detalle:

// show dbs   // para CLI
db.adminCommand('listDatabases'); // para scripts
// use test     // para CLI
db = db.getSiblingDB('test'); // para scripts

// show collections  // para CLI
db.getCollectionNames();  // para scripts
db.usuarios.drop();   // elimino una colección
db.createCollection('usuarios');    // creo una colección
// print('Crea usuarios');


db.usuarios.insertMany(
    [
        {
            nombre:'Diego'
        },
        {
            nombre:'Juan'
        },
        {
            nombre:'Gabriela'
        },
        {
            nombre:'Martina'
        },
        {
            nombre:'Miguel'
        },

    ]
)


// insertar documentos: intertOne o insertMany
db.usuarios.insertOne(
    {
        name: 'Miguel',
        last_name: 'Espinoza',
        age: 30,
        email: 'correoMiguel@hotmail.com'
    }
);

// consultar por documentos
db.usuarios.find();


// ******************
// Primer Actividad en clase:
// ******************
db = db.getSiblingDB('test')   // equivale a escribir en el CLI "use test"
db.estudiantes.insertMany(
    [
        {
            nombre: "Diego",
            apellido: "Gutierrez",
            curso: "Programación",
            correo: "dgutierrez@test.com"
        },
        {
            nombre: "Estella Maris",
            apellido: "Patane",
            curso: "Programación",
            correo: "epatane@test.com"
        },
        {
            nombre: "Rodolfo",
            apellido: "Paez",
            curso: "Diseño Gráfico",
            correo: "fitop@test.com"
        },
        {
            nombre: "Carla",
            apellido: "Peterson",
            curso: "Diseño Gráfico",
            correo: "cpeterson@test.com"
        },
        {
            nombre: "Monica",
            apellido: "Gonzaga",
            curso: "RRHH",
            correo: "mgonzaga@test.com"
        },
    ]
);




db = db.getSiblingDB('pruebas_mongo')

// ******************
// ******************
// CRUD
// ******************
// ******************

// ******************
// Instrucciones básicas (comandos de apoyo):
// ******************
// show dbs
db.adminCommand('listDatabases')
// use pruebas_mongo
db = db.getSiblingDB('pruebas_mongo')
db.dropDatabase()   //borra la base sobre la cual estamos posicionados

// show collections
let data = db.getCollectionNames()
//print(data);

// db (muestra la base de datos actual, donde estamos posicionados)
//print(db)

// db.stats() (muestra estadisticas, metadata, de la base de datos sobre la cual estamos posicionados)
data = db.stats();
print(data);
print(data.objects);

// db.heroes.stats (muestra estadisticas, metadata, de la coleccion indicada en la consulta; heroes en este caso)
data = db.heroes.stats();
// print(data);
// print(data.size);
// let {storageSize:espacioEnDisco, count:documentos}=db.heroes.stats()
// console.log({espacioEnDisco, documentos})

// data=db.heroes.stats().wiredTiger;
// Object.keys(data).forEach(element=>console.log('Llave: ',element));
// Object.values(data).forEach(element=>console.log('valor: ',element));
// Object.entries(data).forEach(element=>console.log(element));


// crear colecciones
db.createCollection('heroes');
db.createCollection('peliculas');

// borrar colecciones (de la base en la que estamos posicionados)
db.peliculas.drop();
db.heroes.drop()
db.empleados.drop()

// borrar una base de datos donde estamos parados
db.dropDatabase();


// ******************
// CRUD:
// ******************
// CREATE: insertar registros en una colección, de uno en uno
// ******************
db.empleados.insertOne(
    {
        _id: 20456234,  // ver _id's asignados por el usuario
        nombre: 'Rodriguez Pablo',
        fechaingreso: new Date(2010, 0, 31)
    }
)
db.empleados.insertOne(
    {
        _id: 17488834,
        nombre: 'Gomez Ana',
        fechaingreso: new Date(2014, 11, 1)
    }
)
db.empleados.insertOne(
    {
        _id: 23463564,
        nombre: 'Juarez Carla',
        fechaingreso: new Date(2022, 11, 18)
    }
);


// ******************
// CREATE: inserter varios documentos: insertMany
// ******************

db.simuladores.insertMany(
    [
        {
            nombre: "Pablo",
            apellido: "Lopez"
        }
    ]
);


// ******************
// READ: consultas a una colección, con find()
// ******************
db.empleados.find()
db.empleados.find().pretty()
db.usuarios2.find()


// Creo la colección mascotas
db.mascotas.drop();
db.createCollection('mascotas');
db.mascotas.insertMany([
    {
        nombre: "Felix",
        especie: "gato",
        edad: 4,
        peliculas: [
            {
                titulo: 'peli 1'
            },
            {
                titulo: 'peli 2'
            }
        ]
    },
    {
        nombre: "Huesos",
        especie: "perro",
        edad: 5,
        peliculas: [
            {
                titulo: 'peli 1'
            },
            {
                titulo: 'peli 2',
                espectadores: 2000000
            },
            {
                titulo: 'Homero y el vendedor de espejos',
                espectadores: 1000000
            },
        ]
    },
    {
        nombre: "Rintintin",
        especie: "perro",
        edad: 5
    },
    {
        nombre: "Lassie",
        especie: "perro",
        edad: 4
    },
    {
        nombre: "Correcaminos",
        especie: "correcaminos",
        edad: 5,
        habilidades: ['inteligencia'],
        peliculas: [
            {
                titulo: 'Las aventuras del Correcaminos IV',
                espectadores: 350000
            }
        ],
        enemigos: [
            {
                nombre: 'Coyote',
                especie: 'coyote',
                domicilio: {
                    calle: 'Amapolas',
                    numero: 16300,
                    departamento:'1B'
                }
            },
        ]
    },
    {
        nombre: "Silvestre",
        especie: "gato",
        edad: 5,
        empresa: 'Warner',
        enemigos: [
            {
                nombre: 'Tweety',
                domicilio: {
                    calle: 'Maipu',
                    numero: 1900,
                    departamento: '3A'
                }
            },
        ]
    },
    {
        nombre: "Claudio",
        especie: "gallo",
        edad: 9
    },
    {
        nombre: "Minnie",
        especie: "raton",
        edad: 5,
        empresa: 'Disney'
    },
    {
        nombre: "Jerry",
        especie: "raton",
        edad: 2,
        empresa: 'Warner',
        habilidades: ['humor','velocidad'],
        enemigos: [
            {
                nombre: 'Tom',
                domicilio: {
                    calle: 'las Bases',
                    numero: 5050
                }
            },
            {
                nombre: 'DonGato',
                domicilio: {
                    calle: 'Soriano',
                    numero: 1457
                }
            }
        ]
    },
    {
        nombre: "Tom",
        especie: "gato",
        edad: 2,
        empresa: 'Warner',
        habilidades: ['humor']
    },
    {
        nombre: "Rocket",
        especie: 'mapache',
        edad: 7,
        empresa: 'Marvel',
        habilidades: ['inteligencia', 'destreza', 'velocidad'],
        peliculas: [
            {
                titulo: 'Guardianes de la Galaxia 1',
                espectadores: 1000000
            },
            {
                titulo: 'Guardianes de la Galaxia 2',
                espectadores: 2000000
            },
            {
                titulo: 'EndGame',
                espectadores: 5000000
            },
            {
                titulo: 'Infinity War'
            },
            {
                titulo: 'Thor Love and Thunder'
            },
        ],
        enemigos: [
            {
                nombre: 'Thanos',
                especie: 'extraterrestre',
                domicilio: {
                    calle: 'Azcuenaga',
                    numero: 3274
                }
            },
            {
                nombre: 'Ronan',
                especie: 'extraterrestre',
                domicilio: {
                    calle: 'las Bases',
                    numero: 1890
                }
            },
        ]
    },
    {
        nombre: "Suertudo",
        especie: 'gato',
        edad: 5,
        empresa: null,
        habilidades: [],
        enemigos: [
            {
                nombre: 'Alf',
                especie: 'extraterrestre',
                domicilio: {
                    calle: 'Ortiz de Rosas',
                    numero: 190
                }
            },
        ]
    },
    {
        nombre: "Cerbero",
        especie: 'perro',
        edad: 10000,
        habilidades:['velocidad']
    },
    {
        nombre: "Blue",
        especie: 'ave',
        edad: null,
        empresa: 'Pixar'
    },
    {
        nombre: "Gardfield",
        especie: 'gato',
        edad: null,
        empresa: null
    }
]);



// ******************
// Conteo de datos
// ******************
db.mascotas.estimatedDocumentCount();
db.mascotas.countDocuments();
db.stats();
db.mascotas.stats();


// ******************
// READ: consultas / busquedad en una colección, con find(opt) -opciones 
// ******************
db.mascotas.find({ especie: 'gato' });
db.mascotas.find({ especie: 'perro' });


// ******************
// Segunda Actividad en clase:
// ******************
db = db.getSiblingDB('colegio');
db.estudiantes.insertMany(
    [
        {
            nombre:'Leandro',
            apellido:'Paredes',
            edad:26,
            correo:'lparedes@test.com',
            sexo:'H'
        },
        {
            nombre:'Julieta',
            apellido:'Miranda',
            edad:19,
            correo:'jmiranda@test.com',
            sexo:'M'
        },
        {
            nombre:'Cristian',
            apellido:'Romero',
            edad:24,
            correo:'cromero@test.com',
            sexo:'H'
        },
        {
            nombre:'Juana',
            apellido:'Martinez',
            edad:32,
            correo:'jmartinez@test.com',
            sexo:'M'
        },
        {
            nombre:'Lucia',
            apellido:'Galan',
            edad:56,
            correo:'lgalan@test.com',
            sexo:'M'
        },

    ]
);

// Consignas:
// todos los estudiantes:

// todos los estudiantes de sexo H

// conteo de documentos totales

// conteo de documentos que complan el criterio "es mujer"



// ******************
// READ: consultas / busquedad en una colección, con FILTROS 
// ******************

db = db.getSiblingDB('pruebas_mongo');

db.mascotas.find({ edad: { $lt: 5 } },{nombre:1, edad:1,_id:0, habilidades:1});
db.mascotas.find({ edad: { $lte: 5 } });
db.mascotas.find({ edad: { $gt: 5 } });
db.mascotas.find({ edad: { $gte: 7 }, nombre:'Claudio' });

db.mascotas.find({ edad: { $eq: 5 } });
db.mascotas.find({ edad: 5 });

db.mascotas.find({ edad: { $ne: 5 } });


// AND:
db.mascotas.find(
    {
        $and: [
            { edad: { $lte: 5 } },
            { especie: 'gato' }
        ]
    },
    {
        _id:0, nombre:1, edad:1, especie:1
    }
);

// OR:
db.mascotas.find(
    {
        $or: [
            { nombre: 'Claudio' },
            { nombre: 'Tom' },
            { edad : {$gt:20}},
        ]
    },
    {
        _id:0, nombre:1, edad:1
    }

);


// AND y OR combinados
db.mascotas.find(
    {
        $and: [
            {
                $or: [
                    { edad: { $lte: 5 } },
                    { edad: { $gt: 50 } }
                ]
            },
            {
                $or: [
                    { nombre: { $in: ['Claudio', 'Horacio', 'Martin', /er/gi] } },
                    { especie: { $nin: ['perro', 'gato'] } }
                ]
            }
        ]
    }
);

// SIZE:
db.mascotas.find({ habilidades: { $size: 2 } });
db.mascotas.find({ peliculas: { $size: 2 } });

// IN:
db.mascotas.find({ nombre: { $in: ['Tom', 'Jerry', 'Claudio'] } });

// NIN:
db.mascotas.find({ nombre: { $nin: ['Tom', 'Jerry', 'Claudio'] } });
db.mascotas.find({ especie: { $nin: ['perro', 'gato'] } });

// ALL:
db.mascotas.find({ habilidades: { $all: ["inteligencia", "destreza"] } });
db.mascotas.find({ peliculas: { $all: [{ titulo: 'peli 1' }, { titulo: 'peli 2' }] } });

// EXISTS:
db.mascotas.find({ empresa: { $exists: true } });
db.mascotas.find({ empresa: { $exists: false } });

db.mascotas.find({ habilidades: { $exists: true, $in: ['inteligencia', 'valor', 'humor'] } });


// ELEMMATCH:
db.mascotas.find(
    { peliculas: { $elemMatch: { titulo: 'EndGame' } } }
);

db.mascotas.find(
    { peliculas: { $elemMatch: { titulo: 'EndGame', espectadores: { $gte: 1000000 } } } }
);

db.mascotas.find(
    { peliculas: { $elemMatch: { titulo: /end/ig, espectadores: { $gte: 1000000 } } } },
    {_id:0, enemigos:0, empresa:0, especie:0, habilidades:0}
);

db.mascotas.find(
    { peliculas: { $elemMatch: { titulo: /end/ig, espectadores: { $gte: 1000000 } } } },
    {nombre:1, 'peliculas.titulo':1}
);

db.mascotas.find(
    { peliculas: { $elemMatch: { espectadores: { $lt: 800000 } } } }
);

db.mascotas.find(
    { habilidades: { $elemMatch: { $eq: 'velocidad' } } }
);

db.mascotas.find(
    {
        $or: [
            { peliculas: { $elemMatch: { titulo: 'peli 1' } } },
            { peliculas: { $elemMatch: { espectadores: { $lt: 1000000 } } } },
            { habilidades: { $elemMatch: { $in : ['velocidad', 'valor']}}},
        ]
    }
);


// ******************
// Busqueda avanzada:
// ******************
// Distinct:
db.mascotas.distinct('especie');
db.mascotas.distinct('edad');
db.mascotas.distinct('peliculas');
db.mascotas.distinct('peliculas.titulo');
db.mascotas.distinct('peliculas.0.titulo');
db.mascotas.distinct('peliculas.3.titulo');
db.mascotas.distinct('habilidades');

// sub-objetos:
db.mascotas.find({ 'peliculas.espectadores': 1000000 });
db.mascotas.find({ 'peliculas.espectadores': { $lt: 1000000 } });
db.mascotas.find({ 'enemigos.domicilio.calle': { $in: ['las Bases', 'Maipu'] } });
db.mascotas.find({ 'enemigos.especie': { $in: ['extraterrestre'] } });
db.mascotas.find({ 'enemigos.especie': { $nin: ['extraterrestre'] } });
db.mascotas.find({ 'peliculas.0.espectadores': { $gt: 1500000 } });
db.mascotas.find({ 'peliculas.1.espectadores': { $gt: 1500000 } });
db.mascotas.find({ 'peliculas.2.espectadores': { $eq: 1000000 } });

// expreciones regulares:
db.mascotas.find({ nombre: /er/ig })
db.mascotas.find({ 'enemigos.domicilio.calle': /las/ig })


// ******************
// Proyecciones, Sorts, Skips, limits
// ******************

// Proyecciones
db.mascotas.find({ 'enemigos.domicilio.calle': /las/ig }, { _id: 0, nombre: 1, edad: 1 });
db.mascotas.find({ 'enemigos.domicilio.calle': /las/ig }, { _id: 0, peliculas: 0, enemigos: 0, empresa: 0 });
db.mascotas.find({ 'enemigos.domicilio.calle': /las/ig }, { _id: 0, nombre: 1, edad: 1, 'enemigos.domicilio.calle':1 });

// (no se pueden mezclar 1's y 0's; la única excepción es el _id, donde si no lo quiero,
// siempre tengo que poner :0)

// sort:
db.mascotas.find({}, { nombre: 1 }).sort({ nombre: 1 })
db.mascotas.find({}, { nombre: 1 }).sort({ nombre: -1 })
db.mascotas.find({ 'enemigos.domicilio.calle': /las/ig }, { _id: 0, peliculas: 0, enemigos: 0, empresa: 0 }).sort({ nombre: -1 })

// skip
db.mascotas.find({}, { nombre: 1 }).sort({ nombre: 1 }).skip(5);
db.mascotas.find({}, { nombre: 1 }).sort({ nombre: -1 }).skip(5);

// limit
db.mascotas.find({}, { nombre: 1 }).sort({ nombre: 1 }).limit(3);
db.mascotas.find({}, { nombre: 1 }).sort({ nombre: -1 }).limit(3);

db.mascotas.find({}, { nombre: 1 }).limit(3);
db.mascotas.find({}, { nombre: 1 }).sort({ _id: -1 }).limit(3);


// ******************
// Ejemplo en vivo:
// ******************
db = db.getSiblingDB('colegio');
db.estudiantes.insertMany(
    [
        {
            nombre:'Joaquin',
            apellido:'Torrejon',
            edad:26,
            correo:'jtorrejon@test.com',
            sexo:'H'
        },
        {
            nombre:'Beatriz',
            apellido:'Paredes',
            edad:26,
            correo:'bparedes@test.com',
            sexo:'M'
        },
        {
            nombre:'Lorena',
        },
        {
            nombre:'Martina',
            apellido:'Gonzalez',
            edad:26,
            correo:'mgonzalez@test.com',
            sexo:'M'
        },
        {
            nombre:'Carolina',
            apellido:'Blanco',
            edad:43,
            correo:'cblanco@test.com',
            sexo:'M'
        },

    ]
);



db = db.getSiblingDB('pruebas_mongo');

// ******************
// UPDATE: actualizar una colección, con update() / updateOne / UpdateMany
// ******************

db.mascotas.update({ 'nombre': 'Correcaminos' }, { $set: { 'edad': 12 } })
db.mascotas.update({ 'especie': 'perro' }, { $inc: { 'edad': 2 } })
db.mascotas.updateOne({ 'especie': 'perro' }, { $inc: { 'edad': 2 } })
db.mascotas.updateMany({ 'especie': 'perro' }, { $inc: { 'edad': 2 } })


db.mascotas.updateMany(
    { nombre: { $eq: 'Correcaminos' } },
    { $set: { "activo": false } }
);

db.mascotas.updateMany(
    { nombre: { $eq: 'Correcaminos' } },
    { $set: { "activo": true, "Heroe": true } }
);

db.mascotas.updateMany(
    { nombre: { $eq: 'Correcaminos' } },
    { $rename: { "Heroe": "esElBueno" } }
);

db.mascotas.updateMany(
    { nombre: { $eq: 'Correcaminos' } },
    { $inc: { "Edad": 10 } }
);

db.mascotas.updateMany(
    { nombre: { $eq: 'Correcaminos' } },
    { $unset: { "esElBueno": true } }
);

db.mascotas.updateMany(
    { nombre: { $eq: 'Patán' } },
    { $set: { "activo": true, "Heroe": true } }
);

// con opción "upsert:true"
db.mascotas.updateMany(
    { nombre: { $eq: 'Patán' } },
    { $set: { "activo": true, "Heroe": true } },
    { upsert: true }
);

db.mascotas.updateMany(
    { especie: { $in: ['reptil'] } },
    { $set: { "activo": true, "Heroe": true } },
    { upsert: true }
);

db.mascotas.updateMany(
    { especie: { $in: ['cocodrilo', 'ave', 'reptil'] } },
    { $set: { "activo": true, "Heroe": true } },
    { upsert: true }
);

db.mascotas.updateMany(
    { especie: { $in: ['cocodrilo', 'ave', 'reptil'] } },
    { $set: { "activo": true, "Heroe": true, "nombre": "Diana" } },
    { upsert: true }
);

db.mascotas.updateMany(
    { especie: { $in: ['reptil'] } },
    { $set: { "activo": false, "Heroe": false, "nombre": "Diana" } },
    { upsert: true }
);




// ******************
// DELETE: actualizar una colección, con update() / updateOne / UpdateMany
// ******************
db.mascotas.findOne({especie:'gato'});
db.mascotas.deleteOne({ especie: 'gato' });
db.mascotas.find({ especie: 'gato' });
db.mascotas.deleteMany({ especie: 'gato' });
db.mascotas.find({ 'peliculas.espectadores': { $lt: 1000000 } });
db.mascotas.deleteMany({ 'peliculas.espectadores': { $lt: 1000000 } });
db.mascotas.find({ 'enemigos.0.domicilio.calle': 'las Bases' });
db.mascotas.find({ 'enemigos.1.domicilio.calle': 'las Bases' });
db.mascotas.deleteMany({ 'enemigos.1.domicilio.calle': 'las Bases' });


// Extra: con updateMany elimino los campos 'enemigos', 'peliculas', y 'habilidades'
db.mascotas.updateMany({}, { $unset: { enemigos: true, peliculas: true, habilidades: true } })


// ******************
// Tercer Actividad en clase:
// ******************

db.clientes.insertMany([
    { "nombre" : "Pablo", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 22 },
    { "nombre" : "Lucia", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 29 },
    { "nombre" : "Fede", "edad" : 35 },
])

// Listar todos los documentos de la colección clientes ordenados por edad descendente.

// Listar el cliente más joven.

// Listar el segundo cliente más joven.

// Listar los clientes llamados 'Juan'

// Listar los clientes llamados 'Juan' que tengan 29 años.

// Listar los clientes llamados 'Juan' ó 'Lucia'.

// Listar los clientes que tengan más de 25 años.

// Listar los clientes que tengan 25 años ó menos.

// Listar los clientes que NO tengan 25 años.

// Listar los clientes que estén entre los 26 y 35 años.

// Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado.

// Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado.

// Borrar los clientes que se llamen 'Juan' y listar verificando el resultado.

// Eliminar además todos los documentos de estudiantes que hayan quedado con algún valor.





// ******************
// Más ejemplos de lo visto anteriormente:
// ******************


// Consultas avanzadas: sort, skip, proyecciones
db.mascotas.find({ edad: { $gte: 5 } }, { nombre: 1, _id: 0 }).sort({ edad: 1 }).limit(5)
db.mascotas.find({ nombre: { $regex: /cam/, $options: 'i' } });
db.mascotas.find({ nombre: { $regex: /er/, $options: 'i' } });

cursor = db.usuarios2.find();
// while (cursor.hasNext()) {
//     printjson(cursor.next());
// }


// https://www.mongodb.com/docs/manual/reference/method/js-cursor/
let cursor = db.empleados.find();

cursor = cursor.map(doc => { return 'Me llamo ' + doc.nombre });
// cursor=db.empleados.find().map(doc=>{return 'Me llamo '+doc.nombre})
// print(cursor);

// print('Cuenta: '+cursor.count())
// print(cursor.explain())


db.heroes.insertMany([
    {
        _id: 1,
        nombre: "Batman",
        empresa: 'DC',
        poder: "inteligencia",
        caracteristicas0a100: {
            fuerza: 60,
            inteligencia: 90,
            resistencia: 65,
            poder: 40,
            velocidad: 30
        }
    },
    {
        _id: 2,
        nombre: "Flash",
        empresa: 'DC',
        poder: "velocidad",
        caracteristicas0a100: {
            fuerza: 50,
            inteligencia: 50,
            resistencia: 70,
            poder: 50,
            velocidad: 100
        }
    },
    {
        _id: 3,
        nombre: "Superman",
        empresa: 'DC',
        poder: "fuerza",
        caracteristicas0a100: {
            fuerza: 100,
            inteligencia: 70,
            resistencia: 100,
            poder: 100,
            velocidad: 98
        }

    },
    {
        _id: 4,
        nombre: "Hulk",
        empresa: 'Marvel',
        poder: "fuerza",
        caracteristicas0a100: {
            fuerza: 100,
            inteligencia: 20,
            resistencia: 100,
            poder: 100,
            velocidad: 70
        }

    },
    {
        _id: 5,
        nombre: "Thor",
        empresa: 'Marvel',
        poder: "fuerza",
        caracteristicas0a100: {
            fuerza: 90,
            inteligencia: 65,
            resistencia: 90,
            poder: 100,
            velocidad: 70
        }

    },
    {
        _id: 6,
        nombre: "Black Widow",
        empresa: 'Marvel',
        poder: "inteligencia",
        caracteristicas0a100: {
            fuerza: 40,
            inteligencia: 90,
            resistencia: 50,
            poder: 40,
            velocidad: 30
        }

    },
    {
        _id: 7,
        nombre: "Ironman",
        empresa: 'Marvel',
        poder: "inteligencia",
        caracteristicas0a100: {
            fuerza: 75,
            inteligencia: 95,
            resistencia: 80,
            poder: 80,
            velocidad: 70
        }

    },
    {
        _id: 8,
        nombre: "Gamora",
        empresa: 'Marvel',
        poder: "fuerza",
        caracteristicas0a100: {
            fuerza: 60,
            inteligencia: 70,
            resistencia: 70,
            poder: 50,
            velocidad: 40
        }

    },
    {
        _id: 9,
        nombre: "Capitan America",
        empresa: 'Marvel',
        poder: "fuerza",
        caracteristicas0a100: {
            fuerza: 90,
            inteligencia: 70,
            resistencia: 100,
            poder: 80,
            velocidad: 50
        }

    },
    {
        _id: 10,
        nombre: "Mujer Maravilla",
        empresa: 'DC',
        poder: "fuerza",
        caracteristicas0a100: {
            fuerza: 95,
            inteligencia: 80,
            resistencia: 95,
            poder: 100,
            velocidad: 50
        }

    },
    {
        _id: 11,
        nombre: "Mantis",
        empresa: 'Marvel',
        poder: "telequinesis",
        caracteristicas0a100: {
            fuerza: 40,
            inteligencia: 50,
            resistencia: 40,
            poder: 90,
            velocidad: 30
        }

    },

]);

cursor = db.heroes.find().sort({ _id: -1 }).limit(3).skip(2);
// while (cursor.hasNext()) {
//    printjson(cursor.next());
// }


db.heroes.find().sort({ _id: -1 }).limit(3);
db.heroes.find().sort({ _id: -1 }).limit(3).skip(2);


db.pruebas.insertMany([
    { a: 5, b: 5, c: null },
    { a: 3, b: null, c: 8 },
    { a: null, b: 3, c: 9 },
    { a: 1, b: 2, c: 3 },
    { a: 2, c: 5 },
    { a: 3, b: 2 },
    { a: 4 },
]);


// ******************
// consultas avanzadas a una colección, con find() y filtros
// ******************

// EXISTS:
db.pruebas.find({ a: { $exists: true } });
db.pruebas.find({ a: { $exists: true, $lte: 3 } });

db.inventario.insertMany([
    { "item": "Lapices", "Cantidad": 350, "tags": ["school", "office"] },
    { "item": "Borradores", "cantidad": 15, "tags": ["school", "home"] },
    { "item": "Mapas", "tags": ["office", "storage"] },
    { "item": "Libros", "cantidad": 5, "tags": ["school", "storage", "home"] }
]);

// IN:
db.inventario.find({ cantidad: { $in: [5, 15] } }, { _id: 0 })

db.survey.insertMany([
    {
        "_id": 1, "results": [{ "product": "abc", "score": 10 },
        { "product": "xyz", "score": 5 }]
    },
    {
        "_id": 2, "results": [{ "product": "abc", "score": 8 },
        { "product": "xyz", "score": 7 }]
    },
    {
        "_id": 3, "results": [{ "product": "abc", "score": 7 },
        { "product": "xyz", "score": 8 }]
    },
    {
        "_id": 4, "results": [{ "product": "abc", "score": 7 },
        { "product": "def", "score": 8 }]
    }
]);

// ELEMMATCH:
db.survey.find(
    { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
)

// las 2 consultas siguientes arrojan el mismo resultado
db.survey.find(
    { results: { $elemMatch: { product: "xyz" } } }
);

db.survey.find(
    { "results.product": "xyz" }
);

// las 2 consultas siguientes, arrijan resultados diferentes
db.survey.find(
    { "results": { $elemMatch: { product: { $ne: "xyz" } } } }
);

db.survey.find(
    { "results.product": { $ne: "xyz" } }
);

// https://www.mongodb.com/docs/manual/tutorial/query-arrays/


// SIZE:
db.inventario.find({ tags: { $size: 2 } });
db.survey.find({ results: { $size: 2 } });

// ALL:
db.inventario.find({ tags: { $all: ["office", "storage"] } });
db.inventario.find({ tags: { $all: ["home", "storage", "school"] } });



db.inventario.insertMany([
    {
        item: "Goma",
        precio: 3500,
        cantidad: 12,
        enVenta: true
    },
    {
        item: "Cartuchera Verde",
        precio: 3500,
        cantidad: 12,
        enVenta: true
    },
    {
        item: "Cartuchera Roja",
        precio: 3500,
        cantidad: 3,
        enVenta: true
    },
    {
        item: "Lapices de colores",
        precio: 1900,
        cantidad: 20
    },
    {
        item: "Birome",
        precio: 500,
        cantidad: 32
    },
    {
        item: "Mochila",
        precio: 11300,
        cantidad: 4
    },
    {
        item: "Cuaderno",
        precio: 1800,
        cantidad: 22
    },
]);


// AND:
db.inventario.find({
    $and: [
        { $or: [{ cantidad: { $lt: 10 } }, { cantidad: { $gt: 50 } }] },
        { $or: [{ enVenta: true }, { precio: { $lt: 5 } }] }
    ]
})


db.inventario.distinct('precio');
db.inventario.distinct('item');


db.personas.insertMany([
    {
        nombre: 'Ignacio',
        caracteristicas: {
            colorOjos: 'marron',
            colorPelo: 'marron',
            estatura: 'media'
        },
        edad: 33
    },
    {
        nombre: 'Camila',
        caracteristicas: {
            colorOjos: 'azul',
            colorPelo: 'rubio',
            estatura: 'media'
        },
        edad: 28
    },
    {
        nombre: 'Enrique',
        caracteristicas: {
            colorOjos: 'marron',
            colorPelo: 'marron',
            estatura: 'alta'
        },
        edad: 35
    },
    {
        nombre: 'Mariana',
        caracteristicas: {
            colorOjos: 'marron',
            colorPelo: 'rojo',
            estatura: 'baja'
        },
        edad: 35
    },
    {
        nombre: 'Lucia',
        caracteristicas: {
            colorOjos: 'verde',
            colorPelo: 'rubio',
            estatura: 'media'
        },
        edad: 35
    },

]);

db.personas.find({ 'caracteristicas.colorOjos': 'verde' });
db.personas.find({ 'caracteristicas.colorOjos': 'verde' });
db.personas.find({ $and: [{ 'caracteristicas.colorOjos': 'marron' }, { 'caracteristicas.estatura': 'baja' }] });


// MUL:
db.productos.insertOne(
    { "_id": 1, "item": "Hats", "precio": 10.99, "cantidad": 25 }
);

db.productos.updateOne(
    { _id: 1 },
    {
        $mul:
        {
            precio: 1.25,
            cantidad: 2
        }
    }
);


// MAX:
db.puntajes.insertOne({ _id: 1, highScore: 800, lowScore: 200 });
db.puntajes.updateOne({ _id: 1 }, { $max: { highScore: 950 } });
db.puntajes.updateOne({ _id: 1 }, { $max: { highScore: 870 } });


// MIN:
db.puntajes.insertOne({ _id: 2, highScore: 800, lowScore: 200 });
db.puntajes.updateOne({ _id: 2 }, { $min: { lowScore: 150 } });
db.puntajes.updateOne({ _id: 2 }, { $min: { lowScore: 250 } });


db.prueba99.updateMany({ nombre: "Diego" }, { $set: { puntos: 100, texto: 'texto de prueba...' } },
    { upsert: true });

db.prueba99.updateMany({ nombre: "Alberto" }, { $set: { puntos: 192, texto: 'texto de prueba' } },
    {
        upsert: true,
        collation: {
            locale: 'es',
            caseLevel: true,
            caseFirst: "upper",
            numericOrdering: true,
            backwards: true
        }
    });

db.prueba99.updateMany({ nombre: "Jimena" }, { $set: { puntos: 100, texto: 'texto de prueba' } },
    { upsert: true });

db.prueba99.updateMany({ nombre: "Juan Manuel" }, { $set: { puntos: 100, texto: 'texto de prueba' } },
    { upsert: false });


db.prueba99.updateMany({}, { $unset: { puntos: '' } });



cursor = db.usuarios2.find({
    $or: [
        { nombre: { $in: ['Mario', 'Micaela', 'Carlos'] } },
        { apellido: { $nin: ['Medina', 'Ravena'] } }
    ]
});

// print(cursor);

// while (cursor.hasNext()) {
    // data=cursor.next();
    // print(data);
    // printjson(data);
// }

// mostrar logs (show logs)
// print(db.adminCommand({ 'getLog' : '*' }))

// mostrar el detalle de un log en particular (show log global)
// print(db.adminCommand({ 'getLog' : 'global' }));