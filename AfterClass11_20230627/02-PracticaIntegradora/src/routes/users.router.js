import {Router} from 'express';

import UsersController from '../controllers/users.controller.js';

const router = Router();


router.get('/', UsersController.getAll);

router.post('/', UsersController.createUser);

router.post('/:uid/courses/:cid', UsersController.asignaCurso)

export default router;