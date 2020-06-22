const { transactionServices } = require('../services/');

const getAllTransactions = async (req, res, next) => {
  const transaction = await transactionServices.getAll();
  res.json(transaction);
};

module.exports = getAllTransactions;
