import { Router } from "express";
import validate from "../../middlewares/validate";
import { create, edit, get, remove } from "../../blueprint/content";
import { createContent, getContent, editContent, removeContent } from "./contents.handler";

export const contentRouter = Router()

contentRouter.post('/admin', validate(create), createContent)

contentRouter.get('/admin/:id', validate(get), getContent)

contentRouter.put('/admin/:id', validate(edit), editContent)

contentRouter.delete('/admin/:id', validate(remove), removeContent)