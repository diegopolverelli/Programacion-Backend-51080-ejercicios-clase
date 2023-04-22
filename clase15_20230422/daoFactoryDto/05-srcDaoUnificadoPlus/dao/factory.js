import {config} from '../config/config.js'

const PERSISTENCIA=config.app.PERSISTENCIA

export const determinaDao=async()=>{
    switch (PERSISTENCIA) {
        case 'MEMORY':
            // let {UsuariosMemoryDao}=await import('./usuariosMemoryDao.js')
            // let {JuguetesMemoryDao}=await import('./juguetesMemoryDao.js')
            
            let {MemoryDao}=await import('./MemoryDao.js')
            
            return new MemoryDao() 
            
            break;

        case 'MONGO':
            // let {UsuariosDBDao}=await import('./usuariosDBDao.js')
            // let {JuguetesDBDao}=await import('./juguetesDBDao.js')
            let {DBDao}=await import('./DBDao.js')

            let pruebaDao2=new DBDao()

            return new DBDao()
            break;
    
        default:
            break;
    }
}
