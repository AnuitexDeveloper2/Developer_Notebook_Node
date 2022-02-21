import * as repository from "./contents.repository"

export const getContentsWithAppointment = async(topic: string,appointment: string) => {
    return await repository.getContentsWithAppointment(topic,appointment)
} 