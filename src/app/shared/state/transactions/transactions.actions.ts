export class LogTransactionsAction {
  static readonly type = '[Transactions] Add item';
  constructor(public payload: {type, amount}) { }
}
