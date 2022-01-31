import mongoose from 'mongoose'
import * as env  from 'dotenv';
import path from 'path';
import logger from '../../helpers/Logging';

env.config()
env.config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) })
const connectionString = "mongodb+srv://Vladimir:25012005@cluster0.xnyh3.mongodb.net/notebookdb?retryWrites=true&w=majority"//process.env.CONNECTION_STRING !== undefined?process.env.CONNECTION_STRING: "" ;
export function connectdb() {
       mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=> {
              logger.info(`System connected to the database @ ${connectionString} .`);
       })
}