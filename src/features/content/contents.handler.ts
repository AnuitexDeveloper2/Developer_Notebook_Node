import logger from "../../helpers/Logging";
import { Request, Response } from "express";
import * as contentService from "./contents.service";

export async function createTopic(req: Request, res: Response) {
    logger.info("Create Content *****Handler***")
    await contentService.createContent(req.body)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}

export async function getContent(req: Request, res: Response) {
    logger.info("Create Content *****Handler***")
    await contentService.getContent(req.body)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}