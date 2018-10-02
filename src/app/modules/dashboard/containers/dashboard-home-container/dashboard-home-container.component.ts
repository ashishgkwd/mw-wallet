import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Log, LogoutUserAction } from '../../../../shared/state';
import { ModalService } from '../../../../shared/services/modal.service';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { DemoComponent } from '../../../../shared/components/demo/demo.component';

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

  constructor(
    private modalService: ModalService,
    private store: Store
  ) { }

  ngOnInit() {
  }

  openModal() {
    // this.modalService.open(ModalComponent, {message: 'KYC compliance is a good thing!'});
    this.modalService.open(DemoComponent, {message: 'I could be any component !'});
  }

  logout() {
    const logoutAction = new LogoutUserAction({});
    console.log('Dispatching', LogoutUserAction.type);
    this.store.dispatch(logoutAction);
  }
}
