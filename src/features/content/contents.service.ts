import contentModel from "../../dataAccess/dataEntities/content";
import * as contentRepository from "./contents.repository";


export const createContent = async (content: contentModel): Promise<contentModel> => {
   return await contentRepository.createContent(content)
}

export const getContent = async (topicId: string) => {
   return await contentRepository.getContent(topicId)
}

export const editContent = async (content: contentModel, id: string): Promise<contentModel | null> => {
   return await contentRepository.editContent(content, id)
}
