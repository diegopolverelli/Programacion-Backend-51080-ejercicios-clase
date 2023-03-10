import { Router } from "express";

import { Heroe } from "../dao/heroesControladorDB.js";

export const router=Router();
import { upload } from "../utils/uploader.js";

const heroe=new Heroe();

router.get('/',heroe.obtenerHeroes)

router.post('/',upload.single('foto'),heroe.grabaHeroes)

router.put('/:id',heroe.modificaHeroe)

router.delete('/:id',heroe.borraHeroe)
