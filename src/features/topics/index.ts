import { Router } from "express";
import { parse } from "../../helpers/parse";
import validate from "../../middlewares/validate";
import { createTopic, getAllTopics, getTopic, saveTopicImage } from "./topics.handler";

export const topicsRouter = Router()


topicsRouter.get('/', getAllTopics)

topicsRouter.post('/', createTopic)

topicsRouter.post('/image/:id', parse, saveTopicImage)

topicsRouter.get('/:id', getTopic)