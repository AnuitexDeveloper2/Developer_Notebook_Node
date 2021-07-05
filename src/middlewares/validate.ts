import { NextFunction, Request, Response } from 'express';
import Joi from "joi";
import errors from "../common/errors";

const _lookup = (message) => {
    let name = message.context.key;
    while (name.match(/[A-Z]/)) {
      const x = /([^A-Z]*)([A-Z])(.*)/.exec(name);
      if (x) {
          name = `${x[1]}_${x[2].toLowerCase()}${x[3]}`;
      }
    }
    let prefix = '';
    switch (message.type) {
      case 'any.required':
        prefix = 'MISSING';
        break;
      default:
        prefix = 'INVALID';
    }
    return `${prefix}_${name.toUpperCase()}`;
  };


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
            const code = _lookup(result.error.details[0]);
            res.send({error: code})
            return
        }
        next()
    }
};

export default validate