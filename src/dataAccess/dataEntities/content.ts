import mongoose, { model } from "mongoose";
import { ContentTypes } from "../../common/enums";

interface Content {
    title: string
}

const schema = mongoose.Schema

const contentSchema = new schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        required: true
    },

    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    }

})

interface contentModel extends Content, mongoose.Document { }
const contentModel = model<contentModel>('Content', contentSchema);
export default contentModel;