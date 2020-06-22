const { Transaction } = require('../models/');

const transactionServices = {
  delete: async id => {
    const transaction = await Transaction.findOneAndDelete(id);
    return transaction;
  },
  getAll: async () => {
    console.log('a');
    const transactions = await Transaction.find({});
    return transactions;
  },
  getOne: async id => {
    const transaction = await Transaction.findById(id);
    return transaction;
  },
  post: async data => {
    const transctions = await Transaction.insertMany(data);
    return transctions;
  },
  update: async id => {
    const transaction = await Transaction.findByIdAndUpdate(id);
    return transaction;
  },
};

module.exports = transactionServices;
