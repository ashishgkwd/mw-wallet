import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { IncrementUserBalance, DecrementUserBalance } from '../../../../shared/state/user/user.actions';
import { LogTransactionsAction } from '../../../../shared/state';
import { Topup } from '../../models/topup';

@Component({
  selector: 'mw-topup-home',
  templateUrl: './topup-home-container.component.html',
  styleUrls: ['./topup-home-container.component.scss']
})
export class TopupHomeContainerComponent implements OnInit {

  @Select(state => state.user.balance)
  currentBalance$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit() {
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
    this.store.dispatch(new LogTransactionsAction(newTopUp));
  }
}
