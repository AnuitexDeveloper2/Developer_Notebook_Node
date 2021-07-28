import { Router } from "express";
import { register, signIn } from './auth.handler';
import validate from "../../middlewares/validate";
import { loginSchema, registerSchema } from "../../blueprint/auth";

export const authRouter = Router();

authRouter.post('/register', validate(registerSchema), register);
authRouter.post('/login', validate(loginSchema), signIn)