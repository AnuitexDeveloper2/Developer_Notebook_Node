import errors from "../../common/errors"
import contentModel from "../../dataAccess/dataEntities/content"

export const createContent = async (content: contentModel): Promise<contentModel> => {
    const newContent = await contentModel.create(content)
    return newContent
}

export const getContent = async (topicId: string): Promise<Array<contentModel>> => {
    const contents = await contentModel.find({topic:topicId})
    return contents
}

export const editContent = async (content: contentModel, id: string): Promise<contentModel | null> => {
    const result = await contentModel.findByIdAndUpdate(id, content)

    return result
}