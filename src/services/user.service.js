import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class userService {
	static createUser = async (data) => {
		const user = new User(data);
		try {
			await user.save();
			return user;
		} catch (error) {
			throw new Error(error);
		}
	};

	static findUser = async (data) => {
		const user = await User.findOne({ email: data });
		if (user) return user;
	};

	static checkUser = async (query) => {
		const user = await User.findOne(query);
		if (user) return user;
	}
}

export default userService;
