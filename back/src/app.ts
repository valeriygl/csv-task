import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';

import mongo from './config/mongoConfig';
import { port } from './config/config';
import transactionRouter from './routes/transactionRouter';

mongo();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api/transactions', transactionRouter);

app.use(errorHandler);

app.listen(port, () => console.log('Example app listening on port port!'));
