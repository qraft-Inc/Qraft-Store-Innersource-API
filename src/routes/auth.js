import { Router } from 'express';
import AuthController from '../controller/Auth'
import authValidation from '../validations/auth.validation'

const {registrationValidation, loginValidation} = authValidation;
//import routes


const router = Router();

//section routing
router.post('/register',registrationValidation, AuthController.registration)
router.get('/login',loginValidation, AuthController.login)
// router.post('/send/forgot-password', validateEmail, sendResetPasswordEmail);   template

export default router;  