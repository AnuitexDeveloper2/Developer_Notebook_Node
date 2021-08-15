import mongoose, { model } from "mongoose";

export enum Level {
    junior = 0,
    middle = 1,
    senior = 2
}

// export enum Topic {
//     JS = 0,
//     TS = 1,
//     Node = 2,
//     Angular = 3,
//     CSharp = 4,
//     ASP_NET = 5
// }

interface Topic {
    title: string;
    src: string;
}

const schema = mongoose.Schema;

const topicSchema = new schema({
    title: {
        type: String,
        required:true
    },


})

interface topicModel extends Topic, mongoose.Document { }
const topicModel = model<topicModel>('Topic', topicSchema);
export default topicModel;