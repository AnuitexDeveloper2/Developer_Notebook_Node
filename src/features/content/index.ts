import { Router } from "express";
import { createTopic, getContent } from "./contents.handler";

export const contentRouter =  Router()

contentRouter.post('/admin', createTopic)

contentRouter.get('/admin', getContent)