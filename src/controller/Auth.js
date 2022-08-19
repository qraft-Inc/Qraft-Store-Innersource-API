import User from '../models/user';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

class AuthController {
//registration
    static registration = async (req, res) => {

        const user = new User({
            "userName": req.body.userName,
            "email": req.body.email,
            "password": req.body.password
        })

        await user.save().then(
            res.status(201).send({ "message": "signup  succcccccccccccc", user })
        )
    }
//login
    static login = async (req, res) => {

        const userDate = {
            "email": req.body.email,
            "password": req.body.password
        }

        const user = await User.findOne({ email: userDate.email })

        if (!user) res.status(404).send("message", "email not found")

        try {

            const userPassword = user.password;
            
            if (await bcrypt.compare(userDate.password, userPassword)) {
                const token = jwt.sign({ name: user.userName, id: user._id }, process.env.TOKEN_SECRET)
                res.set("token", token).status(200).send({ massage: "loged in scccccc" })
            }
            else {
                res.status(401).send({ Message: "Invalid username or password" })
            }

        } catch (error) {
            res.status(500).send({ error })
        }


    }
}

export default AuthController;