import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersHomeComponent } from './transfers-home/transfers-home.component';
import { TransfersRoutingModule } from './transfers-routing.module';
import { MmTransfersModule } from 'mm-transfers';

@NgModule({
  imports: [
    CommonModule,
    TransfersRoutingModule,
    MmTransfersModule
  ],
  declarations: [TransfersHomeComponent],
})
export class TransfersModule { }
