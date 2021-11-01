import  mongoose, { model }  from "mongoose";
import { ContentTypes } from "../../common/enums";

interface Content {
    title: string
}

const schema = mongoose.Schema

const contentSchema = new schema ({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    appointment: {
        type: String
    }
    
})

interface contentModel extends Content, mongoose.Document { }
const contentModel = model<contentModel>('Content', contentSchema);
export default contentModel;