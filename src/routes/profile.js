import { Router } from 'express'; 
import verify from '../middleware/verify';
import profile from '../controller/Profile'
import profileValidation from '../validations/profile.validation'

const { profileValidations, bioValidation, skillsValidation } = profileValidation;

//import routes

const router = Router();

//section routing
router.get('/view', verify, profile.viewProfile);
router.patch('/profile/update', verify, profileValidations , profile.UpdateProfile)
router.patch('/biograph/update', verify, bioValidation , profile.updateBio)
router.patch('/skills/update', verify, skillsValidation , profile.updateSkills)
// router.post('/send/forgot-password', validateEmail, sendResetPasswordEmail); template

export default router;
