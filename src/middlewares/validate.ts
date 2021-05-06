import { NextFunction, Request, Response } from 'express';
import Joi from "joi";
import errors from "../common/errors";


const validate = (schema: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const options: Joi.ValidationOptions = {
            abortEarly: true,
            allowUnknown: true,
            stripUnknown: true,
            convert: true
        }
        const result = schema.validate(req, options)
        if (result.error) {
            const code = result.error.details[0].message;
            throw new errors.BadRequestError(code)
        }
        next()
    }
};

export default validate