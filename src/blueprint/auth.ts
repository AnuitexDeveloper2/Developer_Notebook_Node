import Joi from "joi"

 export const registerSchema : Joi.Schema = Joi.object({
    body: {
        userName: Joi.string().required(),
        email: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        password: Joi.string().required(),
    }
})
