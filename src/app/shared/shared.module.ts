import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './components/wallet/wallet.component';
import { TxnListComponent } from './components/txn-list/txn-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WalletComponent, TxnListComponent, ModalComponent, DemoComponent],
  entryComponents: [ModalComponent, DemoComponent],
  exports: [WalletComponent, TxnListComponent]
})
export class SharedModule { }
