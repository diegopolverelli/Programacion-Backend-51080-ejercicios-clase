import {config} from '../config/config.js'

const PERSISTENCIA=config.app.PERSISTENCIA

export const determinaDao=async()=>{
    switch (PERSISTENCIA) {
        case 'MEMORY':
            let {UsuariosMemoryDao}=await import('./usuariosMemoryDao.js')
            return new UsuariosMemoryDao()
            break;

        case 'MONGO':
            let {UsuariosDBDao}=await import('./usuariosDBDao.js')
            return new UsuariosDBDao()
            break;
    
        default:
            break;
    }
}
