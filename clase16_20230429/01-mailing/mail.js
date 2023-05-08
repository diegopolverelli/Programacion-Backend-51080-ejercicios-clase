import {fileURLToPath} from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer'
import express from 'express'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express();
app.listen(3000,()=>console.log('Server Online...!!!'))

app.get('/mail',async(req,res)=>{
    let {to, subject}=req.query

    let result=await enviar(to, subject)
    res.send(result)
})

const KEY='jvncumjsxcxemwcl'
const APLICACION='backendCoder'

// const transport=nodemailer.createTransport({
//     host: 'smtp.diegopolve.com',
//     port,
//     auth:{
//         user:,
//         pass:
//     }
// })

// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'jaylen57@ethereal.email',
//         pass: 'H1ygjSTnn5WuRDqGpt'
//     }
// });


const transporter = nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth: {
        user: 'diegopolverelli@gmail.com',
        pass: KEY
    }
});


const enviar=async(to, subject)=>{
    return await transporter.sendMail({
        from: 'Diego Polverelli <diegopolverelli@gmail.com>',
        to,
        subject,
        // text: 'Hola, esta es una prueba'
        html: `
        <h1>Hola...!!!</h1>
        <h2>${subject}</h2>
        <img src="cid:diego" width="450"/>
        <img src="cid:lio" width="450"/>
        `,
        attachments:[
            {
                path: __dirname+'/images/diego10.jpg',
                filename:'diego10.jpg',
                cid:'diego'
            },
            {
                path: __dirname+'/images/lio2.jpg',
                filename:'lio2.jpg',
                cid:'lio'
            },
        ]
    })
}

let resultado=await transporter.sendMail({
    from: 'Diego Polverelli <diegopolverelli@gmail.com>',
    to: 'Diego <diegopolverelli@hotmail.com>, diepol@yahoo.com',
    subject: 'Prueba de envío de mails',
    // text: 'Hola, esta es una prueba'
    html: `
    <h1>Hola...!!!</h1>
    <h2>Esta es una prueba</h2>
    <img src="cid:diego" width="450"/>
    <img src="cid:lio" width="450"/>
    `,
    attachments:[
        {
            path: __dirname+'/images/diego10.jpg',
            filename:'diego10.jpg',
            cid:'diego'
        },
        {
            path: __dirname+'/images/lio2.jpg',
            filename:'lio2.jpg',
            cid:'lio'
        },
    ]
})

console.log(resultado)