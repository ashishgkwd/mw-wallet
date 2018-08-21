import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopupContainerComponent } from './containers/topup-container/topup-container.component';
import { TopupHomeContainerComponent } from './containers/topup-home-container/topup-home-container.component';
import { TopupPaymentContainerComponent } from './containers/topup-payment-container/topup-payment-container.component';
import { TopupStatusContainerComponent } from './containers/topup-status-container/topup-status-container.component';

const routes: Routes = [
    {
        path: '',
        component: TopupContainerComponent,
        children: [
            {path: 'options', component: TopupHomeContainerComponent},
            {path: 'payment', component: TopupPaymentContainerComponent},
            {path: 'paymentinfo', component: TopupStatusContainerComponent},
            {path: '', redirectTo: 'options', pathMatch: 'full'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopUpRoutingModule { }
