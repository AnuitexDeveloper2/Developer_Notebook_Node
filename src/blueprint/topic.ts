import Joi from "joi"

export const deleteTopic: Joi.Schema = Joi.object({
    params: {
        id: Joi.string().required(),
    }
})