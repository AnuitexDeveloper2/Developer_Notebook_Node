import appointmentModel from "../../../dataAccess/dataEntities/appointment";
import contentModel from "../../../dataAccess/dataEntities/content";
import { ResponseList } from "../../../types/response";
import * as contentRepository from "./contents.admin.repository";


export const createContent = async (content: contentModel): Promise<contentModel> => {
   return await contentRepository.createContent(content)
}

export const getContent = async (topicId: string):Promise<ResponseList<contentModel>> => {
   return await contentRepository.getContent(topicId)
}

export const editContent = async (content: contentModel, id: string): Promise<contentModel | null> => {
   return await contentRepository.editContent(content, id)
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