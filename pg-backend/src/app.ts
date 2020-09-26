import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { __prod__ } from './constants';
import corsOptions from './configs/cors.config';
import { errorHandler, notFoundHandler } from './middlewares/errors.middleware';

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan(__prod__ ? 'common' : 'dev'));

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
