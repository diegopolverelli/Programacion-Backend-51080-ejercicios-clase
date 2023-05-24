import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';
import mailer from 'nodemailer'
import { config } from './config/config.js';

export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}
export const isValidPassword = (user,password) => bcrypt.compare(password,user.password);


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export class MailService{
    constructor(){
        this.client=mailer.createTransport({
            service:config.mailing.MAIL_SERVICE, 
            port: config.mailing.MAIL_PORT, 
            auth: {
                user: config.mailing.MAIL_USER,
                pass: config.mailing.MAIL_PASSWORD
            }
        })
    }

    async enviarMail(to, subject, html, att=[]){
        return await this.client.sendMail({
            from: 'Cursos <diegopolverelli@gmail.com>',
            to, subject, html
        })
    }

}


export default __dirname;