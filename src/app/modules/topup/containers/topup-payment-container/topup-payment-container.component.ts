import { Component, OnInit } from '@angular/core';
import { DeactivationGuarded } from '../../../../core/guards/route.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'mw-topup-payment-container',
  templateUrl: './topup-payment-container.component.html',
  styleUrls: ['./topup-payment-container.component.scss']
})
export class TopupPaymentContainerComponent implements OnInit, DeactivationGuarded {

  constructor() { }

  ngOnInit() {
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canDeactivate has fired in the component!');
    return false;
  }

}
