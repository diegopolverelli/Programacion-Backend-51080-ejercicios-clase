const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contacto', (req, res) => {
    if (req.query.nombre){
        console.log(req.query.nombre);
    }
    res.send('Contacto...!!!')
})

app.get('/bienvenida', (req, res) => {
    if (req.query.nombre){
        console.log(req.query.nombre);
    }
    res.setHeader("Content-Type","text/html")
    res.status(200).send('<h1 style="color:blue;">Bienvenidos</h1>')
})

app.get('/datos', (req, res) => {

    let persona={
        nombre:"Diego",
        apellido:"Peretti"
    }
    res.setHeader("Content-Type","application/json")
    res.json(persona);
})


app.get('/datos', (req, res) => {
    res.send('DATOS...!!!')
})

app.get('*', (req, res) => {
    res.status(404).send('Page not found')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})