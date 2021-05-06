import { Router } from "express";
import { register } from './auth.handler';
import validate from "../../middlewares/validate";
import { registerSchema } from "../../blueprint/auth";

export const authRouter = Router();

authRouter.post('/register', validate(registerSchema), register);