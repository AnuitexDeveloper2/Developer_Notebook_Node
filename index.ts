import express, { Application } from 'express';
import * as env from 'dotenv';
import path from 'path'
import { connectdb } from './src/dataAccess/database/connectiondb';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authRouter } from './src/features/auth';
import { topicsRouter } from './src/features/topics';
import { contentRouter } from "./src/features/content";
import logger from './src/helpers/Logging';
import expressWinston from "express-winston";
import morgan from "morgan";
import { appointmentRoute } from './src/features/appointment';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
env.config()
app.use(morgan('dev'));
// expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');
app.use(expressWinston.logger({
    winstonInstance: logger,
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    responseFilter: (res, propName) => {
        const contentType = res.get('Content-Type');
  
        // Log normally.
        return res[propName];
      }
}));
env.config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) })
connectdb();

app.use('/auth', authRouter)
app.use('/topics', topicsRouter)
app.use('/contents', contentRouter)
app.use('/appointment', appointmentRoute)
app.use('/', (req, _res, _next) => {
    _res.send("Healthy");
  });
app.listen(process.env.PORT, () => {
    console.log(`server started listenin on port ${process.env.PORT}`)
})
