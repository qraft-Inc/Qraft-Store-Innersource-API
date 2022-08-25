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
}



class userAddress {
	static createUserAddress = async (data) => {
		const address = new User(data);
		try {
			await user.save();
			return user;
		} catch (error) {
			throw new Error(error);
		}
	};

	static findUserAddress = async (data) => {
		const address = await User.findOne({ email: data });
		if (address) return address;
	};
}


export default userService;