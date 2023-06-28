import { coursesService, usersService } from "../services/index.js";
import { MailService, createHash, logger } from "../utils.js";
import os from 'os'

const mailer=new MailService()


export default class UsersController{

    static async getAll(req,res){
        let users = await usersService.getAllUsers();
        if(!users) return res.status(500).send({status:"error",error:"Couldn't get users due to internal error"})
        res.send({status:"success",payload:users})
    }



    static async createUser(req,res){
        let {first_name,last_name,dni,email,birthDate,gender,password} = req.body;
        if(!first_name||!last_name||!dni||!email||!birthDate||!password) {
            logger.log('error',`${req.method} - ${req.url} - ${os.userInfo().username} - Inconplete values - ${JSON.stringify(req.body)}`)
            return res.status(400).send({status:"error",error:"Incomplete values"})
        }
        //Muy importante! La inserción actual de la fecha de nacimiento está pensada para hacerse en el formato
        // MM - DD - YYYY. De otra forma, arrojará un error. puedes enseñar a tus estudiantes el parseo que tú necesites
        //para llegar a este formado, por defecto, se espera que se mande así desde postman.
    
        let existe=await usersService.getUserByEmail(email)
        if(existe) {
            logger.log('error',`${req.method} - ${req.url} - ${os.userInfo().username} - Email existe en BD - ${JSON.stringify(req.body)}`)
            return res.status(400).send({status:'error', error:'Email existe en BD'})
        }
    
        let result = await usersService.createUser({
            first_name,
            last_name,
            email,
            dni,
            birthDate,
            gender,
            password:await createHash(password)
        })
        if(!result) return res.status(500).send({status:"success",payload:result})
    
        logger.info(`Usuario creado correctamente: ${JSON.stringify(result)}`)
        res.send({status:"success",payload:result})
    } // fin createUser

    static async asignaCurso(req,res){
        const {uid,cid} = req.params;
        const course = await coursesService.getCourseById(cid);
        if(!course) return res.status(404).send({status:"error",error:"Course not found"})
        const user = await usersService.getUserById(uid);
        if(!user) return res.status(404).send({status:"error",error:"User not found"});
        //checamos si el usuario ya tenía ese curso registrado
        // console.log(course)
        // console.log(user)
        if(!user.courses) user.courses=[]
        let courseExists = user.courses.some(c=>c._id.toString()===cid);
        if(courseExists) return res.status(400).send({status:"error",error:"The user is already registered in this course"});
        //Si todo está bien, insertamos de ambos lados.
        user.courses.push(course._id);
        course.students.push(user._id);
        await usersService.updateUser(uid,user);
        await coursesService.updateCourse(cid,course);
        let resultMail=await mailer.enviarMail(user.email,'Te has inscripto en un nuevo curso...!!!',`Hola ${user.first_name}...!!! te has inscripto en el curso ${course.title}`)
    
        console.log(resultMail)
    
        res.send({status:"success",message:"User added to course"})
    }

}