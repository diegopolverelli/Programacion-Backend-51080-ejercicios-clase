// Para ejecutar el script desde mongosh:
// load("C:\\Users\\diego\\dev\\CoderHouse\\DesafiosBackend-main\\Clase10Websockets\\ejemplos\\pruebas\\02-mongod\\prueba.js");


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

cursor = db.mascotas.find();
while ( cursor.hasNext() ) {
   printjson(cursor.next());
}


// coleccion con muchos usuarios
db = db.getSiblingDB('pruebas_mongo')
printjson(db.adminCommand('listDatabases'))
print(db.getCollectionNames())
db.usuariosBig.drop()
let nombres=['Lautaro', 'Martina', 'Jimena', 'Morena', 'Marcos', 'Luca', 'Diego', 'Isabella', 'Juana', 'Carolina', 'Fernando']
let apellidos=['Gonzalez', 'Marinoff', 'Fernandez', 'Souto', 'Blanco', 'Gimenez', 'Roncaglia', 'Benitez']
let estudios=['literatura','medicina','desarrollo web','desarrollo backend', 'idiomas', 'rrhh', 'administración de empresas', 'profesorado', 'ingeniería civil', 'abogacia', 'física', 'tecnicatura en ciencias de la comunicación', 'finanzas', 'economía', 'ciencias politicas']
let pais_de_origen=['Argentina','España','Mexico','Uruguay','Perú','Chile','Colombia','Costa Rica']

for(i = 1; i <= 50000; i++) {
  let a1=Math.round(Math.random()*(nombres.length-1));
  let a2=Math.round(Math.random()*(apellidos.length-1));
  let a3=Math.round(Math.random()*(estudios.length-1));
  let a4=Math.round(Math.random()*(pais_de_origen.length-1));
  
  nombre=nombres[a1]+' '+apellidos[a2]
  db.usuariosBig.insertOne(
    {
      codigo: i+10000,  
      nombre,
      estudios: estudios[a3].toLocaleUpperCase(),
      origen: pais_de_origen[a4]
    }
  )
}
