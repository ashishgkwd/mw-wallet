import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { IncrementUserBalance, DecrementUserBalance } from '../../../../shared/state/user/user.actions';
import { LogTransactionsAction } from '../../../../shared/state';
import { Topup } from '../../models/topup';
import { MetaInfo, CardsState } from '../../../../shared/state/cards/cards.state';
import { CardsAction } from '../../../../shared/state/cards/cards.actions';

@Component({
  selector: 'mw-topup-home',
  templateUrl: './topup-home-container.component.html',
  styleUrls: ['./topup-home-container.component.scss']
})
export class TopupHomeContainerComponent implements OnInit {

  @Select(state => state.user.balance)
  currentBalance$: Observable<any>;

  @Select(state => state.user.cards.metaInfo)
  metaInfo$: Observable<MetaInfo>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.metaInfo$.subscribe(
      res => console.log('RES ', res),
      err => console.log('ERR ', err)
    );
  }

  updateBalance(newTopUp: Topup) {
    switch (newTopUp.type) {
      case 'add':
        this.store.dispatch(new IncrementUserBalance({amount: newTopUp.amount}));
        break;
      case 'reduce':
      this.store.dispatch(new DecrementUserBalance({amount: newTopUp.amount}));
        break;
      default:
        break;
    }

    const newMetaInfo: MetaInfo = {
      cardId: `abc123-${newTopUp.amount}`,
      expiry: 'Dec2018',
      issuerInfo: {
        issuedBy: 'MastertCard',
        issuedFor: `Rs. ${newTopUp.amount}`
        }
      };

    this.store.dispatch(new LogTransactionsAction(newTopUp));
    this.store.dispatch(new CardsAction(newMetaInfo));
  }
}
