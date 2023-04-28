import mongoose from 'mongoose'
import {config} from '../config/config.js'

const PERSISTENCIA=config.app.PERSISTENCIA

export const determinaDao=async()=>{
    switch (PERSISTENCIA) {
        case 'MEMORY':
            let {UsuariosMemoryDao}=await import('./usuariosMemoryDao.js')
            let {JuguetesMemoryDao}=await import('./juguetesMemoryDao.js')

            return {
                usuarios: new UsuariosMemoryDao(),
                juguetes: new JuguetesMemoryDao()
            } 
            
            break;

        case 'MONGO':

        // mongoose.connect(config.database.MONGOURL,{dbName:config.database.DB})
        // .then(conn=>console.log('Conectado a la DB...!!!'))

            let {UsuariosDBDao}=await import('./usuariosDBDao.js')
            let {JuguetesDBDao}=await import('./juguetesDBDao.js')



            return {
                usuarios: new UsuariosDBDao(),
                juguetes: new JuguetesDBDao()
            }
            break;
    
        default:
            break;
    }
}
