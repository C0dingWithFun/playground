import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { __PROD__ } from './constants';
import corsOptions from './configs/cors.config';
import { errorHandler, notFoundHandler } from './middlewares/errors.middleware';
import apiRouter from './api/api.router';

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan(__PROD__ ? 'common' : 'dev'));

app.use('/api/v1/', apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
