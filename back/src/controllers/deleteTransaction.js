const { transactionServices } = require('../services/');

const deleteTransaction = async (req, res, next) => {
  const { id } = req.params;
  const transaction = await transactionServices.delete(id);
  res.json(transaction);
};

module.exports = deleteTransaction;
