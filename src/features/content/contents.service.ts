import contentModel from "../../dataAccess/dataEntities/content";
import * as contentRepository from "./contents.repository";


export const createContent = async(content: contentModel) => {
    await contentRepository.createContent(content)
}

export const getContent = async(topicId: string) => {
   return await contentRepository.getContent()
}
