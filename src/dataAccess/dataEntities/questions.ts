import mongoose, { model } from "mongoose";

export enum Level {
    junior = 0,
    middle = 1,
    senior = 2
}

export enum Topic {
    JS = 0,
    TS = 1,
    Node = 2,
    Angular = 3,
    CSharp = 4,
    ASP_NET = 5
}

const schema = mongoose.Schema;

const questionsSChema = new schema({
    level: { type: Level, required: true },
    topic: { type: Topic, required: true}
})