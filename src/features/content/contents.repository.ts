import errors from "../../common/errors"
import contentModel from "../../dataAccess/dataEntities/content"
import topicModel from "../../dataAccess/dataEntities/content"

export const createContent = async(content: contentModel) => {
    const newContent = await contentModel.create(content)
    return newContent
}

export const getContent = () => {
    return [{title: "React"}]
}