import Joi from "joi";

export const create: Joi.Schema = Joi.object({
    body: {
        title: Joi.string().required(),
        topic: Joi.string().required()
    }
})

export const edit : Joi.Schema = Joi.object({
    body: {
        title: Joi.string().required()
    },
    params: {
        id: Joi.string().required()
    }
})

export const remove: Joi.Schema = Joi.object({
    params: {
        id: Joi.string().required()
    }
})

export const get: Joi.Schema = Joi.object({
    params: {
        topicId: Joi.string().required()
    }
})