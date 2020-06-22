const { transactionServices } = require('../services/');

const updateTransaction = async (req, res, next) => {
  const { id } = req.params;
  const transaction = await transactionServices.update(id);
  res.json(transaction);
};

module.exports = updateTransaction;
