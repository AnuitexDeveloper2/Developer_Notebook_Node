import mongoose, { model } from "mongoose";

interface Topic {
    title: string;
    src: string;
    img: any
}

const schema = mongoose.Schema;

const topicSchema = new schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    img: { type: String}


})

interface topicModel extends Topic, mongoose.Document { }
const topicModel = model<topicModel>('Topic', topicSchema);
export default topicModel;