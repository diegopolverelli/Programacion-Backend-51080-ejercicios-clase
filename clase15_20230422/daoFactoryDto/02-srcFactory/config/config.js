import dotenv from 'dotenv'

dotenv.config()

export const config={
    app:{
        PORT:process.env.PORT||8080,
        PERSISTENCIA:process.env.PERSISTENCIA
    },
    database:{
        MONGOURL:process.env.MONGOURL,
        DB:process.env.DB
    }
}