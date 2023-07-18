import errors from "../../common/errors"
import topicModel from "../../dataAccess/dataEntities/topics"
import logger from "../../helpers/Logging";
import { store } from "../../tools/aws/files";
import { FirebaseStorage } from "../../tools/firebase/file";
const randomstring = require("randomstring");



export const getAllTopics = async (): Promise<Array<topicModel>> => {
        return await topicModel.find()
}

export const createTopic = async (topic: topicModel): Promise<topicModel> => {
        const result = await topicModel.create(topic)
        return result
}

export const editTopic = async (topic: topicModel, id: string): Promise<topicModel | null> => {
        const updatedTopic = await topicModel.findByIdAndUpdate(id, topic)
        return updatedTopic
}

export const getTopic = async (id: string): Promise<topicModel | null> => {
        const topic = await topicModel.findById(id)
        return topic
}

export const saveTopicImage = async (data: any, topicId: string): Promise<topicModel> => {
        const topic = await topicModel.findById(topicId)
        if (!topic) {
                throw new errors.BadRequestError("Topic not found")
        }

        var appendedString = randomstring.generate(8);
        var id = `${topic._id}_${Date.now()}_${appendedString}`;
        logger.info("Start upload aws")
        const firabaseStorage = new FirebaseStorage(data[0].buffer, `${id}.jpg`)
        const result = await firabaseStorage.uploadImage();
        topic.img = result
        return topic.save()
}

export const removeTopic = async (id: string): Promise<boolean> => {
        const result = await topicModel.deleteOne({ _id: id })
        if (result.ok) {
                logger.info("Topic was delete")
                return true
        }
        return false
}
