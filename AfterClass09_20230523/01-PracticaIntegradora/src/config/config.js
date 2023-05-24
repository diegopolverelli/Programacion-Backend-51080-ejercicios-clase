import dotenv from 'dotenv'

dotenv.config({path:'./src/.env'})

export const config={
    app:{
        PORT:process.env.PORT||8080,
        SECRET:process.env.SECRET||'miPalabraSecreta',
        PERSISTENCIA:process.env.PERSISTENCIA||'MONGO'
    },
    database:{
        MONGO_URL:process.env.MONGO_URL,
        DB:process.env.DB
    },
    mailing:{
        MAIL_SERVICE:process.env.MAIL_SERVICE,
        MAIL_USER:process.env.MAIL_USER,
        MAIL_PASSWORD:process.env.MAIL_PASSWORD,
        MAIL_PORT:process.env.MAIL_PORT
    }
}