import { Router } from "express";
import validate from "../../middlewares/validate";
import { create, edit, get, getAdmin, remove } from "../../blueprint/content";
import { createContent, getContent, editContent, removeContent, addAppointment, editAppointment } from "./admin/contents.admin.handler";
import { getContentByAppointment } from "./user/contents.handler";

export const contentRouter = Router()

contentRouter.post('/admin', validate(create), createContent)

contentRouter.get('/admin/:id', validate(getAdmin), getContent)

contentRouter.put('/admin/:id', validate(edit), editContent)

contentRouter.delete('/admin/:id', validate(remove), removeContent)

contentRouter.post('/admin/app', addAppointment)

contentRouter.put('/admin/app/:id', editAppointment)

contentRouter.get('/user/:topicId/:appointmentId/:pageNumber', validate(get), getContentByAppointment)
