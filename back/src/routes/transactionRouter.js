const controllers = require('../controllers');
const expres = require('express');

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

module.exports = transactionRouter;
