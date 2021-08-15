import { Request, Response } from 'express';
import * as topicService from "./topics.service";

export async function getAllTopics(req: Request, res: Response) {
    await topicService.getTopics()
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({error:error.message});
        })
}
