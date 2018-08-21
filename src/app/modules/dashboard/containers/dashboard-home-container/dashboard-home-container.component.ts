import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mw-dashboard-home-container',
  templateUrl: './dashboard-home-container.component.html',
  styleUrls: ['./dashboard-home-container.component.scss']
})
export class DashboardHomeContainerComponent implements OnInit {

  @Select(state => state.user.balance)
  currentBalance$: Observable<number>;

  @Select(state => state.transactions.log)
  txnList$: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
