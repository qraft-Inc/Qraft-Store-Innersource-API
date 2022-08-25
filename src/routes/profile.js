import { Router } from 'express';
import userData from '../controller/Profile';
import auth from '../middleware/auth'

//import routes


const router = Router();
router.get("/view",auth,userData)

//section routing
// router.post('/send/forgot-password', validateEmail, sendResetPasswordEmail); template

export default router;