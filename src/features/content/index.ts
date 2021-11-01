import { Router } from "express";
import validate from "../../middlewares/validate";
import { create } from "../../blueprint/content";
import { createContent, getContent } from "./contents.handler";

export const contentRouter =  Router()

contentRouter.post('/admin', validate(create), createContent)

contentRouter.get('/admin', getContent)