import { Response, Request } from "express";

import * as service from "./appointment.service"

export const create = async(req: Request, res: Response) => {
    await service.create(req.body)
    .then((response) => res.json(response))
    .catch((error) => {
        res.json({error:error.message});
    })
}

export const edit = async (req: Request, res: Response) => {
    await service.edit(req.body, req.params.id)
    .then((response) => res.json(response))
    .catch((error) => {
        res.json({error:error.message});
    })
}

export const get = async (req: Request, res: Response)=> {
    await service.get(req.params.topicId)
    .then((response) => res.json(response))
    .catch((error) => {
        res.json({error:error.message});
    })
}

export const remove = async (req: Request, res: Response) => {
    await service.remove(req.params.id)
    .then((response) => res.json(response))
    .catch((error) => {
        res.json({error:error.message});
    })
}