const Router=require('express').Router;
const enrutador=Router();


let alumnos=[
    {
        nombre:"Maria",
        apellido:"Gutierrez",
        domicilio:"Peru 2727, CABA",
        edad:18,
        email: 'mgutierrez2000@hotmail.com'
    },
    {
        nombre:"José",
        apellido:"Swartsman",
        domicilio:"Ayacucho 1814, CABA",
        edad:32,
        email: 'JoseAbelS@gmail.com'
    },
    {
        nombre:"Miguel Angel",
        apellido:"Lopez",
        domicilio:"Av. 9 de Julio 872, 1°C, CABA",
        edad:22,
        email:'lopecitobombon@yahoo.es'
    },
    {
        nombre:"Diego",
        apellido:"Polverelli",
        domicilio:"Alvear 978, Ituzaingo",
        edad:44,
        email:'diegopolverelli@hotmail.com'
    },
    {
        nombre:"Luca",
        apellido:"Martinez",
        domicilio:"Alvear 1415, Ituzaingo",
        edad:18,
        email:'quemirabobo@hotmail.com'
    },

]

enrutador.get('/', (req, res) => {

   
    // codigo, codigo, y más codigo
    let indiceAleatorio=Math.round(Math.random()*4);

    let mascotas='hola';

    res.status(200).render('principal',{
        nombre:"Diego",
        titulo:"Curso Programacion Backend",
        temas:['NodeJs','express','handleBars'],
        muestraTemas:mascotas==0,
        estilos: 'redStyles.css',
        nombreAl:alumnos[indiceAleatorio].nombre,
        emailAl:alumnos[indiceAleatorio].email
    });
});

enrutador.get('/pruebas',(req,res)=>{
    res.status(200).render('prueba1',{
        estilos:'styles.css'
    });
})

module.exports=enrutador;