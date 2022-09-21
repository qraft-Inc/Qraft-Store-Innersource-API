import userService from '../services/user.service';
import messages from '../messages/messages';
import Token from '../helpers/token';
import protection from '../helpers/encryption';

const { createUser, findUser } = userService;
const { checkPassword, hashPassword } = protection;
const { generateToken } = Token;
class AuthController {
  //registration
  static registration = async (req, res) => {

    const hashedPassword = await hashPassword(req.body.password);

    const user = {
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      Role: req.body.Role
    };
    const isEmailAlreadyUsed = await findUser(user.email);
    if (isEmailAlreadyUsed) return res.status(400).send({ error: messages.emailIsTaken });
    const createdUser = await createUser(user);
    res.status(201).send({ message: messages.accountCreated});
  };

  //login
  static login = async (req, res) => {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
    };
    const user = await findUser(newUser.email);
    if (!user) return res.status(404).send({ error: messages.emailNotFound });
    try {
      const doesPasswordMatch = await checkPassword(
        newUser.password,
        user.password
      );
      if (doesPasswordMatch) {
        const tokenPackage = { name: user.userName, id: user._id, Role: user.Role, email: user.email };
        const token = await generateToken(
          tokenPackage,
          process.env.TOKEN_SECRET,
          process.env.EXPIRATION
        );
        res
          .set('token', token)
          .status(200)
          .send({ message: messages.loginSuccessful, token: token });
      } else {
        res.status(400).send({ Message: 'Invalid username or password' });
      }
    } catch (error) {
      res.status(500).send({ error });
    }
  };
}

export default AuthController;
