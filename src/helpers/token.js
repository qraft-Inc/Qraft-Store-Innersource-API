import jwt from 'jsonwebtoken';

class Token {
	static generateToken = (data, secret, expiresIn) => {
		return jwt.sign(data, secret, { expiresIn });
	};
}

export default Token;
