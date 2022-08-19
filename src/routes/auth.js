import { Router } from 'express';
import AuthController from '../controller/Auth'
//import routes


const router = Router();

//section routing
router.post('/register', AuthController.registration)
router.get('/login', AuthController.login)
// router.post('/send/forgot-password', validateEmail, sendResetPasswordEmail);   template

export default router;  