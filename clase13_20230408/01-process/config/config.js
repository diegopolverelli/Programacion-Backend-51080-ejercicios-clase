import dotenv from 'dotenv';

dotenv.config({
    override:true, path: './.env'
})

export const config={
    PORT:process.env.PORT,
    SECRET:process.env.SECRET,
    USERNAME:process.env.USERNAME
}
