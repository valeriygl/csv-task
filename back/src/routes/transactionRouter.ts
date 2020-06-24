import expres from 'express';

import controllers from '../controllers';

const transactionRouter = expres.Router();

transactionRouter
  .route('/')
  .post(controllers.postTransactions)
  .get(controllers.getAllTransactions);

transactionRouter
  .route('/:id')
  .get(controllers.getTransaction)
  .put(controllers.updateTransaction)
  .delete(controllers.deleteTransaction);

export default transactionRouter;
