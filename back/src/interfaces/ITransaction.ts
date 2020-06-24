export default interface ITransaction {
  _id: number;
  cardHolderHash: string;
  datetime: Date;
  amount: number;
}
