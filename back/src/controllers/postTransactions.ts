import { NextFunction, Response, Request } from 'express';

import transactionServices from '../services/';

const postTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await transactionServices.post(req.body);

    res.json(result);
  } catch (err) {
    if (err.name === 'BulkWriteError') {
      res.sendStatus(422);
    }
    next(err);
  }
};

export default postTransactions;
