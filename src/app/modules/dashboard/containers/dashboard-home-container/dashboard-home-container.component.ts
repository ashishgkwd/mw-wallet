import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Log } from '../../../../shared/state';

@Component({
  selector: 'mw-dashboard-home-container',
  templateUrl: './dashboard-home-container.component.html',
  styleUrls: ['./dashboard-home-container.component.scss']
})
export class DashboardHomeContainerComponent implements OnInit {

  @Select(state => state.user.balance)
  currentBalance$: Observable<number>;

  @Select(state => state.user.cards.transactions.log)
  txnList$: Observable<Log[]>;

  constructor() { }

  ngOnInit() {
  }

}
