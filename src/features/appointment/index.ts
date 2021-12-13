import { Router } from "express";
import validate from "../../middlewares/validate";
import { get, remove, create, edit } from "../../blueprint/appointment";
import * as handler from "./appointment.handler";

export const appointmentRoute = Router()

appointmentRoute.post("/", validate(create),handler.create )

appointmentRoute.get("/:topicId", validate(get), handler.get)

appointmentRoute.put("./:id", validate(edit), handler.edit)

appointmentRoute.delete("./:id", validate(remove), handler.remove)
