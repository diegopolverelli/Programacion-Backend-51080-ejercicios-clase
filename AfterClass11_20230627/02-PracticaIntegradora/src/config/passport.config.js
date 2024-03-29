import passport from "passport";
import local from 'passport-local';
import jwt from 'passport-jwt'
import Users from "../dao/dbManagers/users.js";
import { createHash, isValidPassword} from "../utils.js";
import { config } from "./config.js";


const extraeToken=(req)=>{
    let token=null;

    if(req.cookies['coderCookie']){
        token=req.cookies['coderCookie']
    }

    return token
}

const LocalStrategy = local.Strategy;
const userService = new Users();

const initializePassport = async() =>{
    passport.use('jwt', new jwt.Strategy(
        {
            jwtFromRequest: new jwt.ExtractJwt.fromExtractors([extraeToken]),
            secretOrKey: config.app.SECRET
        },
        (jwt_contenido, done)=>{
            try {
                done(null,jwt_contenido)
            } catch (error) {
                done(error)
            }
        }
    ))

    passport.use('register',new LocalStrategy({passReqToCallback:true,usernameField:'email',session:false},
    async(req,email,password,done)=>{
        try{
            const {first_name,last_name,birthDate,dni,gender} = req.body;
            if(!first_name||!last_name||!password||!birthDate||!dni) return done(null,false,{messages:"Incomplete values"})
            //¿El usuario ya está en la base de datos?
            const exists = await userService.getBy({email:email});
            if(exists) return done(null,false,{messages:"User already exists"})
            const hashedPassword = await createHash(password);
            //Insertamos en la base
            const newUser = {
                first_name,
                last_name,
                email,
                birthDate,
                gender,
                dni,
                password:hashedPassword
            }
            let result = await userService.saveUser(newUser);
            //SI TODO SALIÓ BIEN EN LA ESTRATEGIA
            return done(null,result)
        }catch(error){
            done(error)
        }
    }))

    passport.use('login',new LocalStrategy({usernameField:'email',session:false},async(email,password,done)=>{
        try{
            const user = await userService.getBy({email})
            if(!user) return done(null,false,{messages:"No user found"});
            const passwordValidation = await isValidPassword(user,password)
            if(!passwordValidation) return done(null,false,{messages:"Incorrect password"});
            return done(null,user);
        }catch(err){
            return done(err);
        }
    }))

    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })

    passport.deserializeUser(async(id,done)=>{
        let result = await userService.findOne({_id:id})
        return done(null,result);
    })
}

export default initializePassport;