import { Router } from 'express'; 
import verify from '../middleware/verify';
import profile from '../controller/Profile'

//import routes

const router = Router();

//section routing
router.get('/view', verify, profile.viewProfile);
router.patch('/profile/update', verify, profile.UpdateProfile)
// router.post('/send/forgot-password', validateEmail, sendResetPasswordEmail); template

export default router;