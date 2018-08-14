import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './components/wallet/wallet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WalletComponent],
  exports:[WalletComponent]
})
export class SharedModule { }
