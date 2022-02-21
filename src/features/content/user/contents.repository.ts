import contentModel from "../../../dataAccess/dataEntities/content"

export const getContentsWithAppointment = async(appointment: string,topic: string) => {
    const result = await contentModel.find({appointment: appointment, topic: topic})
    return result
} 