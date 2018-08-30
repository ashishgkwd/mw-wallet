import { State, Action, StateContext } from '@ngxs/store';
import { IncrementUserBalance, DecrementUserBalance } from './user.actions';
import { WalletState, WalletStateModel } from '../wallet/wallet.state';
import { CardsStateModel, CardsState } from '../cards/cards.state';

export class UserStateModel {
  public balance: number;
  wallet: WalletStateModel;
  cards:  CardsStateModel;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    balance: 100,
    wallet: { balance: 100, currency: 'USD' },
    cards: null
  },
  children: [
    WalletState,
    CardsState
  ]
})
export class UserState {
  @Action(IncrementUserBalance)
  add(ctx: StateContext<UserStateModel>, action: IncrementUserBalance) {
    const state = ctx.getState();
    const newBalance: number = state.balance + Number.parseInt(action.payload.amount + '');
    ctx.setState({ ...state, balance: newBalance });
  }

  @Action(DecrementUserBalance)
  reduce(ctx: StateContext<UserStateModel>, action: IncrementUserBalance) {
    const state = ctx.getState();
    const newBalance: number = state.balance - action.payload.amount;
    ctx.setState({ ...state, balance: newBalance });
  }
}
