import { NextFunction, Response, Request } from 'express';

import transactionServices from '../services/';

const updateTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const transaction = await transactionServices.update(id, req.body);

    res.json(transaction);
  } catch (err) {
    next(err);
  }
};

export default updateTransaction;
