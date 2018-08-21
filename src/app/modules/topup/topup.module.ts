import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopupContainerComponent } from './containers/topup-container/topup-container.component';
import { TopUpRoutingModule } from './topup-routing.module';
import { TopupHomeContainerComponent } from './containers/topup-home-container/topup-home-container.component';
import { TopupPaymentContainerComponent } from './containers/topup-payment-container/topup-payment-container.component';
import { TopupStatusContainerComponent } from './containers/topup-status-container/topup-status-container.component';
import { SharedModule } from '../../shared/shared.module';
import { AddTopupComponent } from './components/add-topup/add-topup.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TopUpRoutingModule
  ],
  declarations: [
    TopupContainerComponent,
    TopupHomeContainerComponent,
    TopupPaymentContainerComponent,
    TopupStatusContainerComponent,
    AddTopupComponent
  ]
})
export class TopupModule {}
