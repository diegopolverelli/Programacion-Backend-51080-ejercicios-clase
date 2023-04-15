import { Router } from "express";
import usuariosController from "../controller/usuarios.controller.js";

export const router=Router()

router.get('/',usuariosController.getUsuarios)
router.post('/',usuariosController.grabaUsuario)