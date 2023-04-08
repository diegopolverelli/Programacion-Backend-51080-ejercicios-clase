
console.log('Directorio: ', process.cwd())
console.log('Id de Proceso: ',process.pid)
console.log('Uso de Memoria: ',process.memoryUsage());

console.log('Variables de entorno: ',process.env)
console.log('Path: ', process.env.PATH)

console.log('Argumentos que llegan vía CLI: ',process.argv)
console.log('Puerto: ', process.argv[3])

console.log('Argumentos que llegan vía CLI: ',process.argv.slice(2))
console.log('Puerto: ', process.argv.slice(2)[1])
