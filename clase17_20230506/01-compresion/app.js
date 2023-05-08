import express from 'express';
import zlib from 'zlib'
import compression from 'express-compression'

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let texto='';
for(let i=1; i<=300000; i++){
    texto+=`Prueba de texto largo - ${i.toString()}. `
}

// console.log('Generando texto extenso')
// let textoComprimido=zlib.gzipSync(texto)
// console.log(texto);
// console.log(textoComprimido)
// console.log(`Gzip: tamaño texto sin compresion: ${texto.length} / tamaño texto comprimido: ${textoComprimido.length}`)
// textoComprimido=zlib.deflateSync(texto)
// console.log(`Deflate: tamaño texto sin compresion: ${texto.length} / tamaño texto comprimido: ${textoComprimido.length}`)
// textoComprimido=zlib.brotliCompressSync(texto)
// console.log(`Brotli: tamaño texto sin compresion: ${texto.length} / tamaño texto comprimido: ${textoComprimido.length}`)

// textoComprimido=zlib.gzipSync(texto, {level:zlib.constants.Z_BEST_COMPRESSION, memLevel:zlib.constants.Z_BEST_COMPRESSION})
// console.log(`Gzip c/ Best Compression: tamaño texto sin compresion: ${texto.length} / tamaño texto comprimido: ${textoComprimido.length}`)
// textoComprimido=zlib.gzipSync(texto, {level:zlib.constants.Z_BEST_SPEED, memLevel:zlib.constants.Z_BEST_SPEED})
// console.log(`Gzip c/ Best Speed: tamaño texto sin compresion: ${texto.length} / tamaño texto comprimido: ${textoComprimido.length}`)

// app.use(compression({
//     brotli:{enabled:true}
// }))

app.get('/1',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send(texto);
})

app.get('/2',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.setHeader('Content-Encoding','Gzip');
    res.status(200).send(textoComprimido);
})

app.get('/3',compression(),(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send(texto);
})

app.get('/4',compression({brotli:{enabled:true}}),(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send(texto);
})



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));