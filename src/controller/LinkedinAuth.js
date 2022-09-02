import passport from 'passport';
import Token from '../helpers/token';
import userService from '../services/user.service';

passport.use(passport.initialize());
passport.use(passport.session());

const { createUser, checkUser } = userService;
const { generateToken } = Token;

class LinkedinController {
	static onSuccess = async (req, res) => {
		try {
			const { name, id, emails, displayName } = req.user;

			const newUser = {
				userName: displayName,
				linkedinId: id,
				Role: 'client',
				email: emails[0]?.value,
			};

			const query = { linkedinId: newUser.linkedinId }

			const user = (await checkUser(query)) || (await createUser(newUser));
			const tokenPackage = {
				name: user.userName,
				id: user._id,
				Role: user.Role,
				email: user.email,
			};
			const token = await generateToken(
				tokenPackage,
				process.env.TOKEN_SECRET,
				process.env.EXPIRATION
			);
			res.redirect(`${process.env.RIDIRECT}/${token}`);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	};
}

export default LinkedinController;
