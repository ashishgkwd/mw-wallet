import { State, Action, StateContext } from '@ngxs/store';
import { IncrementUserBalance, DecrementUserBalance } from './user.actions';

export class UserStateModel {
  public balance: number;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    balance: 100
  }
})
export class UserState {
  @Action(IncrementUserBalance)
  add(ctx: StateContext<UserStateModel>, action: IncrementUserBalance) {
    const state = ctx.getState();
    let newBalance:number = state.balance + Number.parseInt(action.payload.amount+'');
    ctx.setState({ balance: newBalance });
  }

  @Action(DecrementUserBalance)
  reduce(ctx: StateContext<UserStateModel>, action: IncrementUserBalance) {
    const state = ctx.getState();
    let newBalance:number = state.balance - action.payload.amount;
    ctx.setState({ balance: newBalance });
  }
}
