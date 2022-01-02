import contentModel from "../../../dataAccess/dataEntities/content"

export const getContentsWithAppointment = async() => {
    return await contentModel.find()
} 