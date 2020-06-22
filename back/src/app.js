const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const transactionRouter = require('./routes/transactionRouter');
const mongo = require('./config/mongoConfig');

mongo();

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api/transactions', transactionRouter);

app.use(errorHandler);

app.listen(port, () => console.log('Example app listening on port port!'));
