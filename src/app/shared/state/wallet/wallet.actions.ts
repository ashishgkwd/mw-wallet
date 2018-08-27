export class WalletAction {
  static readonly type = '[Wallet] Update balance';
  constructor(public payload: number) { }
}
