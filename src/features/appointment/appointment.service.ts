import { MyErrors } from "../../constants/errors"
import appointmentModel from "../../dataAccess/dataEntities/appointment"
import { CommonResponse } from "../../models/response"
import * as repo from "./appointment.repository"

export const create = async (data: appointmentModel): Promise<CommonResponse<appointmentModel>> => {
    let result: CommonResponse<appointmentModel> = { data: null };
    const resultData = await repo.create(data)
    if (!resultData) {
        result.error = MyErrors.SOMETHING_WENT_WRONG
    }
    result.data = resultData;
    return result
}

export const edit = async (data: appointmentModel, id: string): Promise<CommonResponse<appointmentModel>> => {
    let result: CommonResponse<appointmentModel> = { data: null };
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