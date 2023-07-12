import appointmentModel from "../../dataAccess/dataEntities/appointment"

export const create = async (data: appointmentModel): Promise<appointmentModel> => {
    return await appointmentModel.create(data)
}

export const edit = async (data: appointmentModel, id: string): Promise<appointmentModel | null> => {
    const result = await appointmentModel.findByIdAndUpdate(id, data)
    return result;
}

export const get = async (topicId: string): Promise<Array<appointmentModel>> => {
    const result = await appointmentModel.find({ topic: topicId })
    return result
}
/**
 * 
 * @param id 
 * @returns 
 */
export const remove = async (id: string): Promise<appointmentModel | null> => {
    return await appointmentModel.findByIdAndDelete(id)
}