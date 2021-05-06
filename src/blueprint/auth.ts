import Joi from "joi"

 export const registerSchema : Joi.Schema = Joi.object({
    body: {
        email: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        password: Joi.string().required(),
    }
})
