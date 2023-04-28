import { UsuariosDBDao } from "../dao/usuariosDBDao.js";
import { UsuariosMemoryDao } from "../dao/usuariosMemoryDao.js";
import { UsuariosService } from "./usuarios.service.js";

export const usuariosService=new UsuariosService(new UsuariosDBDao())