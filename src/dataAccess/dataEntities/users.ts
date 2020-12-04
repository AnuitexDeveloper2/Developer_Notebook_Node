import mongoose, { model } from "mongoose";

export enum Role {
    Admin = 0,
    User = 1
}

export interface User {
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
    role: Role;
    removed_at: boolean;
    status: boolean;
    confirmedEmail: boolean;
}

const schema = mongoose.Schema;

export const usersSchema = new schema({
    userName: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    avatar: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passwordHash: { type: String },
    createdDate: { type: Date, default: Date.now },
    role: { type: Role, required: true, default: Role[1] },
    removed_at: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    confirmedEmai: { type: Boolean, default: false }
});

interface userModel extends User, mongoose.Document { }
const userModel = model<userModel>('User', usersSchema);
export default userModel;

