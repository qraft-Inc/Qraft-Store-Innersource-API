import { Router } from 'express'; 
import Freelancerslists from '../controller/Freelancerslists';

//import routes

const router = Router();

//section routing
router.get('/',Freelancerslists.getAllFreelancers);
router.get('/:id',Freelancerslists.getOneFreelancer);

export default router;
