const { model, Schema } = require('mongoose');

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

module.exports = Transaction;
