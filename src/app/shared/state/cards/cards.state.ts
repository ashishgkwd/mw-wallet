import { State, Action, StateContext } from '@ngxs/store';
import { CardsAction } from './cards.actions';
import { TransactionsStateModel, TransactionsState } from '../transactions/transactions.state';

export interface Card {
  name: string;
  firstName: string;
  lastName: string;
  issuedOn: number;
  expiry: number;
  txns: TransactionsStateModel;
}

export class CardsStateModel {
  public cards: Card[];
}

@State<CardsStateModel>({
  name: 'cards',
  defaults: {
    cards: []
  },
  children: [
    TransactionsState
  ]
})
export class CardsState {
  @Action(CardsAction)
  add(ctx: StateContext<CardsStateModel>, action: CardsAction) {
    const state = ctx.getState();
    ctx.setState({ cards: [ ...state.cards, action.payload ] });
  }
}
