const { transactionServices } = require('../services/');

const getTransaction = async (req, res, next) => {
  const { id } = req.params;
  const transaction = await transactionServices.getOne(id);
  res.json(transaction);
};

module.exports = getTransaction;
