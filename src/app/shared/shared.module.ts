import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './components/wallet/wallet.component';
import { TxnListComponent } from './components/txn-list/txn-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WalletComponent, TxnListComponent],
  exports: [WalletComponent, TxnListComponent]
})
export class SharedModule { }
