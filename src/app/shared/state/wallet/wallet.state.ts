import { State, Action, StateContext } from '@ngxs/store';
import { WalletAction } from './wallet.actions';

export class WalletStateModel {
  public balance: number;
  public currency: string;
}

@State<WalletStateModel>({
  name: 'wallet',
  defaults: {
    balance: 0,
    currency: 'INR'
  }
})
export class WalletState {
  @Action(WalletAction)
  add(ctx: StateContext<WalletStateModel>, action: WalletAction) {
    const state = ctx.getState();
    ctx.setState({ ...state, balance: action.payload });
  }
}
