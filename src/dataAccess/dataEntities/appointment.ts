import mongoose, { model } from "mongoose";

const schema = mongoose.Schema

interface Appointment {
    title: string
}

const appointmentSchema = new schema({
    title: {
        type: String,
        required: true
    },

    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
        required: true
    }

})

interface appointmentModel extends Appointment, mongoose.Document { }
const appointmentModel = model<appointmentModel>('Appointment', appointmentSchema);
export default appointmentModel;