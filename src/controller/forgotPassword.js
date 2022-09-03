import User from "../models/user";
import userService from '../services/user.service';
import emailHelper from '../helpers/email'

const { checkUser } = userService;
class ForgotPasswordController{
    static forgotPasswordHandler = async (req,res) =>{

        const query = { email: req.body.email }
        const isEmailInDb = await checkUser(query)
        if(isEmailInDb){

            emailHelper()
        }

    }
}

export default ForgotPasswordController