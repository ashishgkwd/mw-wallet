import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopupContainerComponent } from "./container/topup-container/topup-container.component";
import { TopupPaymentComponent } from "./components/topup-payment/topup-payment.component";
import { TopupStatusComponent } from "./components/topup-status/topup-status.component";
import { TopupHomeComponent } from "./components/topup-home/topup-home.component";
import { TopUpRoutingModule } from "./topup-routing.module";
// import { TransfersModule } from "transfers";

@NgModule({
  imports: [CommonModule, TopUpRoutingModule],
  declarations: [
    TopupContainerComponent,
    TopupHomeComponent,
    TopupPaymentComponent,
    TopupStatusComponent
  ]
})
export class TopupModule {}
