import { model, Schema } from 'mongoose';

const transactionSchema = new Schema(
  {
    _id: Number,
    cardHolderHash: String,
    datetime: Date,
    amount: Number,
  },
  { versionKey: false }
);

const Transaction = model('transaction', transactionSchema);

export default Transaction;
