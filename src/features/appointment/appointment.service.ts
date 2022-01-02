import appointmentModel from "../../dataAccess/dataEntities/appointment"
import * as repo from "./appointment.repository"

export const create = async (data: appointmentModel): Promise<appointmentModel> => {
    return await repo.create(data)
}

export const edit = async (data: appointmentModel, id: string): Promise<appointmentModel | null> => {
    return await repo.edit(data,id)
}

export const get = async (topicId: string): Promise<Array<appointmentModel>> => {
    return await repo.get(topicId)
}

export const remove = async (id: string): Promise<appointmentModel | null> => {
    return await repo.remove(id)
}