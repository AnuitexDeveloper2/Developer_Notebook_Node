import errors from "../../common/errors"
import topicModel from "../../dataAccess/dataEntities/topics"
import { store } from "../../tools/aws/files";
const randomstring = require("randomstring");



export const getAllTopics = async (): Promise<Array<topicModel>> => {
        return await topicModel.find()
}

export const createTopic = async (topic: topicModel): Promise<topicModel> => {
        const result = await topicModel.create(topic)
        return result
}

export const editTopic = async (topic: topicModel): Promise<topicModel | null> => {
        const updatedTopic = await topicModel.findByIdAndUpdate(topic._id, topic)
        return updatedTopic
}

export const getTopic = async (id: string): Promise<topicModel | null> => {
        const topic = await topicModel.findById(id)
        return topic
}

export const saveTopicImage = async (data: any, topicId: string) => {
        const topic = await topicModel.findById(topicId)
        if (!topic) {
                throw new errors.BadRequestError("Topic not found")
        }
        console.log(data)

        var appendedString = randomstring.generate(8);
        var id = `${topic._id}_${Date.now()}_${appendedString}`;
        console.log("Start upload aws")
        const result = await store(data[0].buffer, `${id}.jpg`)

        topic.img = result

        return topic.save()
}
