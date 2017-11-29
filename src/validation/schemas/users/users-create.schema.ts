import * as Joi from "joi";

export default Joi.object().keys({
    name: Joi.object().keys({
        first: Joi.string().required(),
        middle: Joi.string().optional(),
        last: Joi.string().required()
    }),
    email: Joi.string().email(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    hearAbout: Joi.string(),
    marketingEmail: Joi.string()
});