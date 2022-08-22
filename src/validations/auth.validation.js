import Joi from 'joi';

const registrationSchema = Joi.object({
	userName: Joi.string().required().min(6),
	email: Joi.string().required().email(),
	Role: Joi.string().valid('client', 'artist', 'admin').required(),
	password: Joi.string()
		.required()
		.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#*&]+)[\w@#*&]{8,}$/)
		.messages({
			'string.pattern.base':
				'{{#label}} must contain at least a number, a special character, an upper-case letter and longer than 8 characters',
		}),
});


const loginSchema = Joi.object({
	email: Joi.string().required().email(),
	password: Joi.string().required(),
})


class authValidation {
	static registrationValidation = (req, res, next) => {
		const { error } = registrationSchema.validate(req.body);
		if (error) {
			return res.status(422).json({
				error: error.details[0].message.replace(/["'`]+/g, ''),
			});
		}
		next();
	};

	static loginValidation = (req, res, next) => {
		const { error } = loginSchema.validate(req.body);
		if (error) {
			return res.status(422).json({
				error: error.details[0].message.replace(/["'`]+/g, ''),
			});
		}
		next();
	}

}

export default authValidation;