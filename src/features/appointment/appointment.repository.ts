import appointmentModel from "../../dataAccess/dataEntities/appointment"

export const create = async (data: appointmentModel): Promise<appointmentModel> => {
    return await appointmentModel.create(data)
}

export const edit = async (data: appointmentModel, id: string): Promise<appointmentModel | null> => {
    return await appointmentModel.findByIdAndUpdate(id,data)
}

export const get = async (topicId: string): Promise<Array<appointmentModel>> => {
    return await appointmentModel.find({topic: topicId})
}

export const remove = async (id: string): Promise<appointmentModel | null> => {
    return await appointmentModel.findByIdAndDelete(id)
}