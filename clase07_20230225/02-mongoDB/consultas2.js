// Para ejecutar el script desde mongosh:
// load("C:\\Users\\diego\\dev\\CoderHouse\\DesafiosBackend-main\\Clase10Websockets\\clase\\02-mongoDB\\consultas2.js");


db = db.getSiblingDB('pruebas_mongo')

db.posts.drop()

db.posts.insertOne(
  {
    _id: 1,
    titulo: 'Lenguaje Java',
    contenido: 'Uno de los lenguajes más utilizados es ...',
    comentarios: [{
        autor: 'Marcos Paz',
        mail: 'pazm@gmail.com',
        contenido: 'Me parece un buen...'
    },
    {
        autor: 'Ana Martinez',
        mail: 'martineza@gmail.com',
        contenido: 'Todo ha cambiado en...'
    },
    {
        autor: 'Luiz Blanco',
        mail: 'blancol@outlook.com',
        contenido: 'Afirmo que es...'
    }]
  }
)

db.posts.insertOne(
  {
    _id: 2,
    titulo: 'Lenguaje C#',
    contenido: 'Microsoft desarrolla el lenguaje C# con el objetivo ...',
    comentarios: [{
        autor: 'Pablo Rodriguez',
        mail: 'rodriguezp@gmail.com',
        contenido: 'Correcta idea.'
    },
    {
        autor: 'Maria Contreras',
        mail: 'contrerasm@gmail.com',
        contenido: 'Buen punto de vista...'
    }]
  }
)

// recuperar los títulos de todos los posts y los nombres de los usuarios que hicieron comentarios en cada post
print("Títulos de los posts y nombres de los usuarios que hicieron comentarios");
print(db.posts.find({},{_id:0,titulo:1,'comentarios.autor':1}).pretty())
printjson(db.posts.find({},{_id:0,titulo:1,'comentarios.autor':1}).pretty())

// todos los posts donde ha comentado el usuario 'Pablo Rodriguez'
print("Posts donde ha comentado Pablo Rodriguez");
print(db.posts.find({'comentarios.autor':'Pablo Rodriguez'}).pretty())
printjson(db.posts.find({'comentarios.autor':'Pablo Rodriguez'}).pretty())

// todos los posts que comentó primero 'Rodriguez Pablo'
print("Posts donde comentó primero Pablo Rodriguez");
console.log("Posts donde comentó primero Pablo Rodriguez");
print(db.posts.find({'comentarios.0.autor':'Pablo Rodriguez'}).pretty())
printjson(db.posts.find({'comentarios.0.autor':'Pablo Rodriguez'}).pretty())