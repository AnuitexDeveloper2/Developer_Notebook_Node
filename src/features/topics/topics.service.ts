import { MyErrors } from "../../constants/errors";
import topicModel from "../../dataAccess/dataEntities/topics"
import { CommonResponse } from "../../models/response"
import * as topicRepository from "./topics.repository"


export const getTopics = async (): Promise<CommonResponse<topicModel[]>> => {
    let result: CommonResponse<topicModel[]> = { data: null };
    const resultData = await topicRepository.getAllTopics()
    if (!resultData) {
        result.error = MyErrors.SOMETHING_WENT_WRONG
    }
    result.data = resultData
    return result
}

export const createTopic = async (topic: topicModel): Promise<topicModel> => {
    return await topicRepository.createTopic(topic)
}

export const saveTopicImage = async (data: any, topicId: string) => {
    return await topicRepository.saveTopicImage(data, topicId)
}

export const getTopic = async (topicId: string) => {
    return await topicRepository.getTopic(topicId)
}

export const editTopic = async (topic: topicModel, id: string): Promise<topicModel | null> => {
    return await topicRepository.editTopic(topic, id)
}

export const removeTopic = async (id: string): Promise<boolean> => {
    return await topicRepository.removeTopic(id)
}