import { State, Action, StateContext } from '@ngxs/store';
import { LogTransactionsAction } from './transactions.actions';

interface Log {
  type:string;
  amount:number;
  timestamp?:number;
}

export class TransactionsStateModel {
  public log: Log[];
}

@State<TransactionsStateModel>({
  name: 'transactions',
  defaults: {
    log: []
  }
})
export class TransactionsState {
  @Action(LogTransactionsAction)
  add(ctx: StateContext<TransactionsStateModel>, action: LogTransactionsAction) {
    const state = ctx.getState();
    console.log('payload: ', action.payload);
    ctx.setState({ log: [...state.log, action.payload ] });
  }
}
