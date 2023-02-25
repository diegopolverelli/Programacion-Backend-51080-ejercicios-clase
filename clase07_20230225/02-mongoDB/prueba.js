// Para ejecutar el script desde mongosh:
// load("C:\\Users\\diego\\dev\\CoderHouse\\DesafiosBackend-main\\Clase10Websockets\\clase\\02-mongoDB\\prueba.js");


db = db.getSiblingDB('pruebas_mongo')
printjson(db.adminCommand('listDatabases'))
print(db.getCollectionNames())
db.articulos.drop()
let nombre="Articulo "
for(i = 1; i <= 10; i++) {
  db.articulos.insertOne(
    {
      _id: i,  
      nombre: nombre+i
    }
  )
}
cursor = db.articulos.find();
while ( cursor.hasNext() ) {
   printjson(cursor.next());
}


db = db.getSiblingDB('pruebas_mongo')
data=db.getCollectionNames();
data.forEach(element => {
    let ejecutar=`db.${element}.drop();`

    console.log(ejecutar);
   
    // new Function("console.log('Hello World');")()
    new Function(ejecutar)()
});

db = db.getSiblingDB('test')
data=db.getCollectionNames();
data.forEach(element => {
    let ejecutar=`db.${element}.drop();`

    console.log(ejecutar);
    new Function(ejecutar)()
});

db = db.getSiblingDB('colegio')
data=db.getCollectionNames();
data.forEach(element => {
    // ejecutar=`db.${element}.find();`
    let ejecutar=`db.${element}.drop();`

    console.log(ejecutar);
    new Function(ejecutar)()
});

