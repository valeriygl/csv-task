import { NextFunction, Response, Request } from 'express';

import transactionServices from '../services/';

const getTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const transaction = await transactionServices.getOne(id);

    if (transaction) {
      res.json(transaction);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default getTransaction;
