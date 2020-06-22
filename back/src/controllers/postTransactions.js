const { transactionServices } = require('../services/');

const postTransactions = async (req, res, next) => {
  const result = await transactionServices.post(req.body);
  res.json(result);
};

module.exports = postTransactions;
