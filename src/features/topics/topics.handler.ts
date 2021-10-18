import { Request, Response } from 'express';
import logger from '../../helpers/Logging';
import * as topicService from "./topics.service";

export async function getAllTopics(req: Request, res: Response) {
    await topicService.getTopics()
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}

export async function createTopic(req: Request, res: Response) {
    logger.info("Create Topic *****Handler***")
    await topicService.createTopic(req.body)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}

export async function saveTopicImage(req: any, res: Response) {
    logger.info("Save Image *****Handler*****")
    await topicService.saveTopicImage(req.files, req.params.id)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}

export async function getTopic(req: Request, res: Response) {
    logger.info("Get Topic *****Handler*****")
    await topicService.getTopic(req.params.id)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}
