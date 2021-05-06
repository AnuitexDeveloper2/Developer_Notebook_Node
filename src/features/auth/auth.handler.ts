import { Request, Response } from 'express';
import * as authService from "../auth/auth.service";

export async function register(req: Request, res: Response) {
    await authService.register(req.body)
        .then((response) => res.json(response))
        .catch()
}

export async function signIn(req: Request, res: Response) {

}