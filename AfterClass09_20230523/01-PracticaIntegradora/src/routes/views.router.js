import {Router} from 'express';
import Users from '../dao/dbManagers/users.js';
import Courses from '../dao/dbManagers/courses.js';
import passport from 'passport';
import { politicas } from '../middlewares/auth.js';

const usersManager = new Users();
const coursesManager = new Courses();

const router = Router();

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/',passport.authenticate('jwt',{session:false}),politicas(['TEACHER','STUDENT']),async(req,res)=>{
    let users = await usersManager.getAll();
    console.log(users);
    res.render('users',{users})
})

router.get('/courses',passport.authenticate('jwt',{session:false}),politicas(['TEACHER']),async(req,res)=>{
    let courses = await coursesManager.getAll();
    console.log(courses);
    res.render('courses',{courses})
})


export default router;