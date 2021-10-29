import { Router } from "express";
import { parse } from "../../helpers/parse";
import validate from "../../middlewares/validate";
import { createTopic, editTopic, getAllTopics, getTopic, saveTopicImage, removeTopic } from "./topics.handler";
import { deleteTopic } from "../../blueprint/topic";

export const topicsRouter = Router()


topicsRouter.get('/', getAllTopics)

topicsRouter.post('/', createTopic)

topicsRouter.post('/image/:id', parse, saveTopicImage)

topicsRouter.get('/:id', getTopic)

topicsRouter.put('/:id', editTopic)

topicsRouter.delete('/:id', removeTopic)