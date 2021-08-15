import { Router } from "express";
import validate from "../../middlewares/validate";
import { getAllTopics } from "./topics.handler";

export const topicsRouter = Router()


topicsRouter.get('/', getAllTopics)