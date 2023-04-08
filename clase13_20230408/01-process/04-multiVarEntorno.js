import {config} from './config/configMulti.js'
import express from 'express'

const app=express()

app.get('/',(req,res)=>{
    res.send(`Usuario: ${config.USERNAME}`)
})

app.listen(config.PORT,()=>console.log(`Server escuchando en puerto ${config.PORT}`))
