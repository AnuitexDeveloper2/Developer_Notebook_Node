import { Router } from "express";
import { register } from './auth.handler';

export const authRouter = Router();

authRouter.post('/register', register);