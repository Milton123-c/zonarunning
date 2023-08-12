import {getAll, create,remove} from '../controllers/avatar.controllers';
import {Router} from 'express'
//import upload from '../utils/multer';

export const routerAvatar = Router()

routerAvatar.route('/')
    .get(getAll)
    .post(create)
   
routerAvatar.route('/:id')
    .delete(remove)
    