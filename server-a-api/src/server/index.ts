import * as bodyParser from 'body-parser';
import express from 'express';

import errorHandler from '../framework/middlewares/errorHandler';
import isAlive from './routes/isAlive';
import v1 from './routes/v1';

const app = express().use(bodyParser.json()).use(isAlive).use('/api/v1', v1).use(errorHandler);

export default app;
