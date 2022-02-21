import * as service from "./contents.service";
import { Request, Response } from "express";

export const getContentByAppointment = async (req: Request, res: Response) => {
  try {
    const result = await service.getContentsWithAppointment(
      req.params.appointmentId,
      req.params.topicId
    );
    return res.json(result);
  } catch (error) {
    res.json({ error: error });
  }
};
