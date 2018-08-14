import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { IncrementUserBalance, DecrementUserBalance } from '../../../../shared/state/user/user.actions';
import { LogTransactionsAction } from '../../../../shared/state';

@Component({
  selector: 'mw-topup-home',
  templateUrl: './topup-home.component.html',
  styleUrls: ['./topup-home.component.scss']
})
export class TopupHomeComponent implements OnInit {

  @Select(state => state.user.balance)
  currentBalance$:Observable<any>;

  constructor(private store:Store) { }

  ngOnInit() {
  }

  updateBalance(newAmount, action) {
    switch (action) {
      case 'add':
        this.store.dispatch(new IncrementUserBalance({amount:newAmount}))
        break;
      case 'reduce':
      this.store.dispatch(new DecrementUserBalance({amount:newAmount}))
        break;
      default:
        break;
    }
    this.store.dispatch(new LogTransactionsAction({amount:newAmount, type:action}));
  }
}
