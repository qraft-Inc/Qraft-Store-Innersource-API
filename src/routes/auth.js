import { Router } from 'express';
import passport from 'passport';
import googleController from '../controller/googleAuth'
<<<<<<< HEAD
import LinkedinController from '../controller/LinkedinAuth';
import TwitterController from '../controller/twitterAuth';
=======
>>>>>>> added google login
import AuthController from '../controller/Auth'
import authValidation from '../validations/auth.validation'

const { registrationValidation, loginValidation } = authValidation;
//import routes


const router = Router();

//section routing
router.post('/register', registrationValidation, AuthController.registration)
router.get('/login', loginValidation, AuthController.login)
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
<<<<<<< HEAD
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }), googleController.onSuccess)
router.get('/linkedin', passport.authenticate('linkedin'));
router.get('/auth/linkedin/callback',passport.authenticate('linkedin', { failureRedirect: '/login'}), LinkedinController.onSuccess);
router.get('/twitter', passport.authenticate('twitter', { scope: ['profile', 'email'] }));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/failed' }), TwitterController.onSuccess)

=======
router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }), googleController.onSuccess)
>>>>>>> added google login
// router.post('/send/forgot-password', validateEmail, sendResetPasswordEmail);   template

export default router;  