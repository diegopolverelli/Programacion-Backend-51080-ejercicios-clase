import express from 'express';
import __dirname, { logger } from './utils.js';

import usersRouter from './routes/users.router.js';
import coursesRouter from './routes/courses.router.js';
import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/views.router.js'

import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import cookieParser from 'cookie-parser';
import { config } from './config/config.js';

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const app = express();
const PORT = config.app.PORT;
const connection = mongoose.connect(config.database.MONGO_URL,{dbName:config.database.DB})
// const connection = mongoose.connect(process.env.MONGO_URL)


/**
 * Template engine
 */
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

const options={
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'API usuarios / cursos',
            version: '1.0.0',
            description: 'Documentación app usuarios / cursos'
        }
    },
    apis: [ './src/docs/*.yaml']
}

const specs=swaggerJSDoc(options)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

/**
 * Middlewares
 */
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());

app.use('/',viewsRouter)
app.use('/api/users',usersRouter);
app.use('/api/courses',coursesRouter);
app.use('/api/sessions',sessionsRouter);

// logger.log('error','Mensaje de prueba: esto es un error')
logger.log('debug','Mensaje de prueba: App. inicializada')

const server = app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`));
