import { Router } from "express";

import { Heroe } from "../dao/heroesControladorDB.js";

export const router=Router();

const heroe=new Heroe();

router.get('/',heroe.obtenerHeroes)

router.post('/',heroe.grabaHeroes)

router.put('/:id',heroe.modificaHeroe)

router.delete('/:id',heroe.borraHeroe)
