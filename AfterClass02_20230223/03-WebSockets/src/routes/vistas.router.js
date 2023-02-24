import { Router } from "express";
// import { io } from "../app.js";
const router=Router();

router.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.status(200).render('heroesOnline')
});


export  {router}