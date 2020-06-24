import { NextFunction, Response, Request } from 'express';

import transactionServices from '../services/';

const deleteTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const transaction = await transactionServices.delete(id);

    if (transaction) {
      res.json(transaction);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default deleteTransaction;
