import { JuguetesService } from "./juguetes.service.js";
import { ProductosService } from "./productos.service.js";
import { UsuariosService } from "./usuarios.service.js";
import { config } from "../config/config.js";
import { UsuariosMemoryDao } from "../dao/usuariosMemoryDao.js";
import { UsuariosDBDao } from "../dao/usuariosDBDao.js";


let usuariosService;
let juguetesService;
let productosService;
if(config.app.PERSISTENCIA=='MEMORY'){
    usuariosService=new UsuariosService(new UsuariosMemoryDao)
    juguetesService=new JuguetesService(new UsuariosMemoryDao) // iría el juguetes memory dao
    productosService=new ProductosService(new UsuariosMemoryDao) // el productos memory dao

}else{
    usuariosService=new UsuariosService(new UsuariosDBDao)
    juguetesService=new JuguetesService(new UsuariosDBDao) // iría el juguetes DB dao
    productosService=new ProductosService(new UsuariosDBDao) // el productos DB dao
}

export {usuariosService, juguetesService, productosService}
