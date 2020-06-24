import Transaction from '../models/';
import ITransaction from '../interfaces/ITransaction';

const transactionServices = {
  delete: async (id: string) => {
    const transaction = await Transaction.deleteOne({ _id: id });
    if (transaction.deletedCount) {
      return transaction;
    }
  },
  getAll: async () => {
    const transactions = await Transaction.find({});

    return transactions;
  },
  getOne: async (id: string) => {
    const transaction = await Transaction.findById(id);

    return transaction;
  },
  post: async (data: ITransaction[]) => {
    const transctions = await Transaction.insertMany(data);

    return transctions;
  },
  update: async (id: string, data: ITransaction) => {
    const transaction = await Transaction.findByIdAndUpdate(id, data);

    return transaction;
  },
};

export default transactionServices;
