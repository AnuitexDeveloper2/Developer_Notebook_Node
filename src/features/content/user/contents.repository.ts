import contentModel from "../../../dataAccess/dataEntities/content"

export const getContentsByAppointmentId = async (appoinmentId: string) => {
    return await contentModel.find({ appointment: appoinmentId })
} 