import { Router } from 'express';
import auth from './auth'
import Profile from '../models/profile';

//import routes


const router = Router();

//section routing

router.use('/auth', auth)
router.user('/Profile',Profile)
// router.use('/trip', multiCity); template

export default router;