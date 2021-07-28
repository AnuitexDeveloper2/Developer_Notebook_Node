import { Request, Response } from 'express';
import * as authService from "../auth/auth.service";

export async function register(req: Request, res: Response) {
    await authService.register(req.body)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}

export async function signIn(req: Request, res: Response) {
    await authService.signIn(req.body.email, req.body.password)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}