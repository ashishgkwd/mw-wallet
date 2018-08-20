import { NgModule } from '@angular/core';
import { MmTransfersComponent } from './mm-transfers.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MmTransfersComponent],
  exports: [MmTransfersComponent]
})
export class MmTransfersModule { }
