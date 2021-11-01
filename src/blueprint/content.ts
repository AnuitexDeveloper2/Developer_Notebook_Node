import Joi from "joi";

export const create: Joi.Schema = Joi.object({
    body: {
        title: Joi.string().required(),
        description: Joi.string().required(),
        appointment: Joi.string().required(),
    }
})