import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
import { config } from "../config/config.js";

const router = Router();

router.post('/register',passport.authenticate('register',{passReqToCallback:true,session:false,failureRedirect:'/api/sessions/failedRegister',failureMessage:false}),(req,res)=>{
    res.send({status:"success",message:"User registered",payload:req.user._id});
});

router.get('/failedRegister',(req,res)=>{
    res.send("failed Register");
})

router.post('/login',passport.authenticate('login',{failureRedirect:'/api/sessions/failedLogin',session:false}),(req,res)=>{
    //serializedUser podrá convertirse en un DTO más adelante.
    const serializedUser = {
        id : req.user._id,
        name : `${req.user.first_name} ${req.user.last_name}`,
        role: req.user.role,
        email: req.user.email
    }
    const token = jwt.sign(serializedUser,config.app.SECRET,{expiresIn:"1h"})
    res.cookie('coderCookie',token,{maxAge:3600000}).send({status:"success",payload:serializedUser});
})

router.get('/failedLogin',(req,res)=>{
    res.send("failed Login");
})

export default router;