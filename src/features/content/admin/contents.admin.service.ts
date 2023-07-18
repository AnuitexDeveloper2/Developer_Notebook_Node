import { MyErrors } from "../../../constants/errors";
import appointmentModel from "../../../dataAccess/dataEntities/appointment";
import contentModel from "../../../dataAccess/dataEntities/content";
import { CommonResponse } from "../../../models/response";
import { ResponseList } from "../../../types/response";
import * as contentRepository from "./contents.admin.repository";


export const createContent = async (content: contentModel): Promise<contentModel> => {
   let result: CommonResponse<appointmentModel> = { data: null };
   const resultData = await contentRepository.createContent(content)
    if (!resultData) {
        result.error = MyErrors.SOMETHING_WENT_WRONG
    }
    result.data = resultData
   return  resultData
}

export const getContent = async (topicId: string):Promise<ResponseList<contentModel>> => {
   return await contentRepository.getContent(topicId)
}

export const editContent = async (content: contentModel, id: string): Promise<CommonResponse<contentModel>> => {
   let result: CommonResponse<appointmentModel> = { data: null };
   const resultData = await contentRepository.editContent(content, id)
    if (!resultData) {
        result.error = MyErrors.SOMETHING_WENT_WRONG
    }
    result.data = resultData
   return  result
}

export const removeContent = async(id: string): Promise<boolean> => {
   return await contentRepository.removeContent( id)
}

export const addAppointment = async(title: string): Promise<appointmentModel> => {
   return await contentRepository.addAppointment(title)
}

export const editAppointment = async(title: string, id: string) => {
   return await contentRepository.editAppointment(title,id)
}