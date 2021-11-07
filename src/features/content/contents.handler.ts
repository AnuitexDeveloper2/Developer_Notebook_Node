import logger from "../../helpers/Logging";
import { Request, Response } from "express";
import * as contentService from "./contents.service";

export async function createContent(req: Request, res: Response) {
    logger.info("Create Content *****Handler***")
    await contentService.createContent(req.body)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}

export async function getContent(req: Request, res: Response) {
    logger.info("Get Content *****Handler***")
    await contentService.getContent(req.params.id)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}

export async function editContent(req: Request, res: Response) {
    logger.info("Edit Content *****Handler***")
    await contentService.editContent(req.body, req.params.id)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}

export async function removeContent(req: Request, res: Response) {
    logger.info("Remove Content *****Handler***")
    await contentService.removeContent(req.params.id)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}