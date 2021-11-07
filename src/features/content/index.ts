import { Router } from "express";
import validate from "../../middlewares/validate";
import { create, edit, get } from "../../blueprint/content";
import { createContent, getContent, editContent } from "./contents.handler";

export const contentRouter = Router()

contentRouter.post('/admin', validate(create), createContent)

contentRouter.get('/admin/:id', validate(get), getContent)

contentRouter.put('/admin/:id', validate(edit), editContent)