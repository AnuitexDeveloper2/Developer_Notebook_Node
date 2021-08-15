import topicModel from "../../dataAccess/dataEntities/topics"


export const getAllTopics = async() => {
    return await topicModel.find()
 }