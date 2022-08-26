import { Router } from 'express';
import userData from '../controller/Profile';
import auth from '../middleware/auth'
import Profile from '../models/profile';
import User from '../models/user';

exports.updateProfile=catchAsyncErrors(async(req,res,next)=>{
    const newUserData= {
        name: req.body.name,
        email: req.body.email
    }
    //update profile picture
    const user= await User.findByIdAndUpdate(req.user.id.newUserData,{
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).Json({
        sucess:true
    })
})

//import routes


const router = Router();
router.get("/view",auth,userData)

//section routing
// router.post('/send/forgot-password', validateEmail, sendResetPasswordEmail); template

export default router;