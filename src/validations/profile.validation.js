import Joi from 'joi';

const profileSchema = Joi.object({
    gender: Joi.string().valid('female', 'male').required(),
    dob: Joi.string(),
    price_range: Joi.string(),
    working_hours: Joi.string(),
    profession: Joi.string().required()
});
const updateBio = Joi.object({
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    location: Joi.string()
});
const updateSkills = Joi.object({
    Portofolio: Joi.string().required(),
    Niche: Joi.string().required(),
    Social_media: Joi.string().required(),
    Band_membership: Joi.string()
});


class profileValidation {
    static profileValidations = async (res, req, next) => {
        const { error } = profileSchema.validate(req.body);
        if (error) {
            return res.status(422).json({
                error: error.details[0].message.replace(/["'`]+/g, ''),
            });
        }
        next();

    }

    static bioValidation = (req, res, next) => {
        const { error } = updateBio.validate(req.body);
        if (error) {
            return res.status(422).json({
                error: error.details[0].message.replace(/["'`]+/g, ''),
            });
        }
        next();
    }

    static skillsValidation = (req, res, next) => {
        const { error } = updateSkills.validate(req.body);
        if (error) {
            return res.status(422).json({
                error: error.details[0].message.replace(/["'`]+/g, ''),
            });
        }
        next();
    }

}

export default profileValidation
