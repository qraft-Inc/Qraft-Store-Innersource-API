import { Router } from 'express';
import auth from './auth';
import profile from './profile';
import swaggerUI from 'swagger-ui-express';
import  apiDocumentation  from '../docs/apidoc';

//import routes


const router = Router();

//section routing

router.use('/auth', auth)
router.use('/user',profile)
router.use('/documentation',swaggerUI.serve,swaggerUI.setup(apiDocumentation));
// router.use('/trip', multiCity); template

export default router;