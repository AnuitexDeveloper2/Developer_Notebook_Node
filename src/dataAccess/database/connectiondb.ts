import mongoose from 'mongoose'
import * as env  from 'dotenv';
import path from 'path';

env.config()
env.config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) })
const connectionString = process.env.CONNECTION_STRING !== undefined?process.env.CONNECTION_STRING: "" ;
export function connectdb() {
       mongoose.connect("mongodb://localhost/notebookdb", { useCreateIndex: true, useNewUrlParser: true })
}