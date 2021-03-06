import express, { Application } from 'express';
import * as env from 'dotenv';
import path from 'path'
import { connectdb } from './src/dataAccess/database/connectiondb';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authRouter } from './src/features/auth';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
env.config()
env.config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) })
connectdb();

app.use('/auth',authRouter)
app.listen(process.env.PORT, () => {
    console.log(`server started listenin on port ${process.env.PORT}`)
})
