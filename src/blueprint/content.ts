import Joi from "joi";

export const create: Joi.Schema = Joi.object({
    body: {
        title: Joi.string().required(),
        description: Joi.string().required(),
        appointment: Joi.string().required(),
    }
})

export const edit: Joi.Schema = Joi.object({
    body: {
        title: Joi.string().required(),
        description: Joi.string().required(),
        appointment: Joi.string().required(),
    },
    params: {
        id: Joi.string().required(),
    }
})

export const getAdmin: Joi.Schema = Joi.object({
    params: {
        id: Joi.string().required(),
    }
})

export const remove: Joi.Schema = Joi.object({
    params: {
        id: Joi.string().required(),
    }
})

export const get: Joi.Schema = Joi.object({
    params:{
        appointmentId: Joi.string().required(),
        topicId: Joi.string().required(),
        pageNumber: Joi.number().required(),
    }
})