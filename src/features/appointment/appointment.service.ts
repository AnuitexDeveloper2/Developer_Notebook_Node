import { MyErrors } from "../../constants/errors"
import appointmentModel from "../../dataAccess/dataEntities/appointment"
import { CommonResponse } from "../../models/response"
import * as repo from "./appointment.repository"

let result: CommonResponse<appointmentModel> = {data: null};
export const create = async (data: appointmentModel): Promise<appointmentModel> => {
    return await repo.create(data)
}

export const edit = async (data: appointmentModel, id: string): Promise<CommonResponse<appointmentModel>> => {
    const resultData = await repo.edit(data, id)
    if (!resultData) {
        result.error = MyErrors.SOMETHING_WENT_WRONG
    }
    result.data = resultData;
    return result
}

export const get = async (topicId: string): Promise<Array<appointmentModel>> => {
    return await repo.get(topicId)
}

export const remove = async (id: string): Promise<appointmentModel | null> => {
    return await repo.remove(id)
}