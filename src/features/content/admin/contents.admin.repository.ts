import errors from "../../../common/errors"
import contentModel from "../../../dataAccess/dataEntities/content"
import appointmentModel from "../../../dataAccess/dataEntities/appointment";
import logger from "../../../helpers/Logging"
import { ResponseList } from "../../../types/response"

export const createContent = async (content: contentModel): Promise<contentModel> => {
    const newContent = await contentModel.create(content)
    return newContent
}

export const getContent = async (topicId: string): Promise<ResponseList<contentModel>> => {
    const totalDocuments = await contentModel.countDocuments({ topic: topicId })
    const contents = await contentModel.find({ topic: topicId })//.populate('appointment')
    const result: ResponseList<contentModel> = {
        data: contents,
        count: totalDocuments
    }
    return result
}

export const editContent = async (content: contentModel, id: string): Promise<contentModel | null> => {
    const result = await contentModel.findByIdAndUpdate(id, content)

    return result
}

export const removeContent = async (id: string): Promise<boolean> => {
    const result = await contentModel.deleteOne({ _id: id })
    if (result.ok) {
        logger.info("Content Item was delete")
        return true
    }
    return false
}

export const addAppointment = async (title: string): Promise<appointmentModel> => {
    return await appointmentModel.create({ title })
}

export const editAppointment = async (title: string, id: string) => {
    return await appointmentModel.findByIdAndUpdate(id, { title: title })
}