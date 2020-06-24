import { NextFunction, Response, Request } from 'express';

import transactionServices from '../services/';

const getAllTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transaction = await transactionServices.getAll();

    res.json(transaction);
  } catch (err) {
    next(err);
  }
};

export default getAllTransactions;
