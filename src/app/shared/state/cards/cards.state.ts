import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CardsAction } from './cards.actions';
import { TransactionsStateModel, TransactionsState } from '../transactions/transactions.state';

export interface IssuerInfo {
  issuedBy: string;
  issuedFor: string;
}

export interface MetaInfo {
  cardId: string;
  expiry: string;
  issuerInfo: IssuerInfo;
}

export interface CardsStateModel {
  name: string;
  firstName: string;
  lastName: string;
  issuedOn: number;
  expiry: number;
  metaInfo: MetaInfo;
  txns: TransactionsStateModel;
}

/* export class CardsStateModel {
  public cards: Card[];
} */

@State<CardsStateModel>({
  name: 'cards',
  defaults: {
    name: 'MasterCard',
    firstName: 'Ashish',
    lastName: 'Gaikwad',
    issuedOn: 28082018,
    expiry: 31122018,
    metaInfo: {
      cardId: 'abc000',
      expiry: 'Dec2018',
      issuerInfo: {
        issuedBy: 'MastertCard',
        issuedFor: `Rs. 0`
        }
      },
    txns: null,
  },
  children: [
    TransactionsState
  ]
})
export class CardsState {

  @Selector()
  static metaInfo(state: CardsStateModel) {
    return state.metaInfo;
  }

  @Action(CardsAction)
  add(ctx: StateContext<CardsStateModel>, action: CardsAction) {
    // const state = ctx.getState();
    ctx.patchState({ metaInfo: action.payload });
  }
}
