import { Router } from 'express';
import auth from './auth';
import profile from './profile';

//import routes


const router = Router();

//section routing

router.use('/auth', auth)
router.use('/user',profile)
// router.use('/trip', multiCity); template

export default router;