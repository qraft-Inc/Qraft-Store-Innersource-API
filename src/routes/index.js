import { Router } from 'express';
import auth from './auth'

//import routes


const router = Router();

//section routing

router.use('/auth', auth)
// router.use('/trip', multiCity); template

export default router;