import jwt from 'jsonwebtoken';

class Token {
	static generateToken = (data, secret, expiresIn) => {
		return jwt.sign(data, secret, { expiresIn });
	};

	static verifyToken = (token, secret) => {
		return jwt.verify(token, secret);	
	}
}

export default Token;
