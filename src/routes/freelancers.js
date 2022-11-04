import { Router } from 'express'; 
import Freelancerslists from '../controller/Freelancerslists';

//import routes

const router = Router();

//section routing
router.get('/all',Freelancerslists.getAllFreelancers);
// router.post('/send/forgot-password', validateEmail, sendResetPasswordEmail); template

export default router;
