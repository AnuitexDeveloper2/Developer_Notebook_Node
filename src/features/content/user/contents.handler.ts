import logger from "../../../helpers/Logging";
import { Request, Response } from "express";
import * as userContentService from "./contents.service"


export async function getContentsByAppointmentId(req: Request, res: Response) {
    logger.info("Get Contents by Appointment *****Handler***")
    await userContentService.getContent(req.params.id)
        .then((response) => res.json(response))
        .catch((error) => {
            res.json({ error: error.message });
        })
}
