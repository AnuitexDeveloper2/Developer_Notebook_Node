import * as topicRepository from "./topics.repository"

export const getTopics = async() => {
    return await topicRepository.getAllTopics()
}