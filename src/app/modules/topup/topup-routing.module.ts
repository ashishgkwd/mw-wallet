import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopupContainerComponent } from './container/topup-container/topup-container.component';
import { TopupHomeComponent } from './components/topup-home/topup-home.component';
import { TopupPaymentComponent } from './components/topup-payment/topup-payment.component';
import { TopupStatusComponent } from './components/topup-status/topup-status.component';

const routes: Routes = [
    {
        path:'',
        component: TopupContainerComponent,
        children: [
            {path: 'options', component: TopupHomeComponent},
            {path: 'payment', component: TopupPaymentComponent},
            {path: 'paymentinfo', component: TopupStatusComponent},
            {path: '', redirectTo: 'options', pathMatch: 'full'},
        ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopUpRoutingModule { }
